import connectMongoDB from "@/lib/connectMongoDB";
import { NextResponse } from "next/server";

export const POST = async(req) => {
    const bookInfo = await req.json();
    const bookedCourseCollection = connectMongoDB("bookedCourse");
    const storeBookingData = await bookedCourseCollection.insertOne(bookInfo);

    return NextResponse.json(storeBookingData);
}