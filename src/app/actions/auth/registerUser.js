"use server"
import connectMongoDB from "@/lib/connectMongoDB";
import bcrypt from "bcrypt"
import { revalidatePath } from "next/cache";

export const registerUser = async (payload) => {
    // console.log(payload);
    // Receive values from payload
    const {email, password} = payload;
    if(!email || !password) return null;

    // Collect user data then find by email query
    const userCollection = connectMongoDB("allUsers");
    const user = await userCollection.findOne({email: payload?.email});

    if(!user){
        const hashedPassword = await bcrypt.hash(password, 10);
        payload.password = hashedPassword;
        const postResult = await userCollection.insertOne(payload);
        postResult.insertedId = postResult.insertedId.toString();
        revalidatePath("/login");
        return postResult;
    }

    return null;
}