import { authOptions } from "@/lib/authOptions";
import connectMongoDB from "@/lib/connectMongoDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const session = await getServerSession(authOptions);
    
    if (session) {
        const email = session?.user?.email
        // console.log(email);
        const bookingCollection = connectMongoDB("bookedCourse");
        const result = await bookingCollection.find({ email }).toArray();
        return NextResponse.json(result);
    }

    return NextResponse.json({});
}

export const POST = async (req) => {
    const bookInfo = await req.json();
    const bookedCourseCollection = connectMongoDB("bookedCourse");
    const storeBookingData = await bookedCourseCollection.insertOne(bookInfo);

    return NextResponse.json(storeBookingData);
}