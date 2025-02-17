import connectMongoDB from "@/lib/connectMongoDB";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const coursesData = connectMongoDB("allCourses");
    const findCourses = coursesData.find({});
    const courses = await findCourses.toArray();
    // console.log(courses);
    return NextResponse.json(courses);
}