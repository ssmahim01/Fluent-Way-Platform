import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import connectMongoDB from "./connectMongoDB";
import loginUser from "@/app/actions/auth/loginUser";

export const authOptions = {
    providers: [
      CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          email: { label: "Email", type: "email", placeholder: "Provide your email" },
          password: { label: "Password", type: "Type your password" }
        },
        async authorize(credentials, req) {
          // Add logic here to look up the user from the credentials supplied
          const user = await loginUser(credentials);
          // console.log(user);
  
          if (user) {
            // Any object returned will be saved in `user` property of the JWT
            return user
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null
  
            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
        }
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
    ],
    pages: {
      signIn: "/authentication/login"
    },
    secret: process.env.NEXT_AUTH_SECRET,
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
  
        if(account){
          const {providerAccountId, provider} = account;
          const {email: user_email, image, name} = user;
          const userCollection = connectMongoDB("allUsers");
          const isExistedUser = await userCollection.findOne({providerAccountId});
          if(!isExistedUser){
            const payload = {providerAccountId, provider, name, email: user_email, image};
            await userCollection.insertOne(payload);
          }
        }
        return true
      },
    }
  }