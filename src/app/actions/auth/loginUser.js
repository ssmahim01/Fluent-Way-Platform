"use server"
import bcrypt from "bcrypt";
import connectMongoDB from "@/lib/connectMongoDB";

const loginUser = async(payload) => {
    // Receive values from payload
    const {email, password} = payload;

    if(!payload?.email || !payload?.password){
        throw new Error("Email and password are required");
    }

     // Collect user data then find by email query
    const userCollection = connectMongoDB("allUsers");
    const user = await userCollection.findOne({email});

    if(!user) {
        throw new Error("User not found");
    }

    const isPassOk = await bcrypt.compare(password, user.password);
    if(!isPassOk){
        throw new Error("Invalid Password");
    }
    
    return user;
};

export default loginUser;