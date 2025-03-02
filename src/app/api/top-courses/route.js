import connectMongoDB from "@/lib/connectMongoDB";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const coursesData = connectMongoDB("allCourses");
    const findCourses = coursesData.find();
    const courses = await findCourses.sort({ rating: - 1 }).limit(6).toArray();
    return NextResponse.json(courses);
}