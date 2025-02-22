"use server"
import bcrypt from "bcrypt";
import connectMongoDB from "@/lib/connectMongoDB";

const loginUser = async(payload) => {
    const {email, password} = payload;
    const userCollection = connectMongoDB("allUsers");
    const user = await userCollection.findOne({email});

    if(!user) return null;
    const isPassOk = bcrypt.compare(user?.password, password);
    if(!isPassOk) return null;
    return user;
};

export default loginUser;