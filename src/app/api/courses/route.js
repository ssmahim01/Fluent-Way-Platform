import connectMongoDB from "@/lib/connectMongoDB";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const coursesData = connectMongoDB("allCourses");
    const courses = await coursesData.find({}).toArray();
    // console.log(courses);
    return NextResponse.json(courses);
}