import { authOptions } from "@/lib/authOptions";
import connectMongoDB from "@/lib/connectMongoDB";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

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
        return NextResponse.json({ success: false, message: "Forbidden Access" }, { status: 401 })
    }
}