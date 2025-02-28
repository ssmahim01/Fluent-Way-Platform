import { authOptions } from "@/lib/authOptions";
import connectMongoDB from "@/lib/connectMongoDB";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const { id } = await params;
    const bookingCollection = connectMongoDB("bookedCourse");
    const query = { _id: new ObjectId(id) };
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const findBooking = await bookingCollection.findOne(query);
    const isOwner = email === findBooking.email;
    if (isOwner) {
        return NextResponse.json(findBooking);
    } else {
        return NextResponse.json({ message: "Forbidden GET action" }, { status: 403 })
    }
}

export const PATCH = async (req, { params }) => {
    const { id } = await params;
    const query = { _id: new ObjectId(id) };
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const bookingCollection = connectMongoDB("bookedCourse");
    const findBooking = await bookingCollection.findOne(query);
    const isBookingOwner = email === findBooking.email;
    if(isBookingOwner){
        const body = await req.json();
        const updateInfo = {
           $set: {
            number: body.number,
            status: body.status,
           }
        }
        const updatedBooking = await bookingCollection.updateOne(query, updateInfo);
        revalidatePath("/booked-courses");
        return NextResponse.json(updatedBooking);
    }else{
        return NextResponse.json({message: "Forbidden Access"}, {status: 403})
    }
}

export const DELETE = async (req, { params }) => {
    const { id } = await params;
    const query = { _id: new ObjectId(id) };
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const bookingCollection = connectMongoDB("bookedCourse");
    const currentBooking = await bookingCollection.findOne(query);
    const isAccountOwner = email === currentBooking?.email;
    if (isAccountOwner) {
        const deleteResult = await bookingCollection.deleteOne(query);
        revalidatePath("/booked-courses");
        return NextResponse.json(deleteResult);
    } else {
        return NextResponse.json({ success: false, message: "Forbidden Access" }, { status: 403 })
    }
}