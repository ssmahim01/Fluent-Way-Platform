import connectMongoDB from "@/lib/connectMongoDB";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server"

export const GET = async (req, { params }) => {
    const { id } = await params;
    const query = { _id: new ObjectId(id) };
    const singleCourseData = connectMongoDB("allCourses");
    const course = await singleCourseData.findOne(query);
    return NextResponse.json(course);
}

export const PATCH = async (req, { params }) => {
    const status = await req.json();
    const { id } = await params;
    const query = { _id: new ObjectId(id) };
    const option = { upsert: true };

    const courseCollection = connectMongoDB("allCourses");
    const findCourse = await courseCollection.findOne(query);
    const updateData = {
        $inc: {likes: 1},
        $set: {...status}
    }
    const updateResult = await courseCollection.updateOne(query, updateData, option);
    revalidatePath(`/course/${findCourse?._id}`);
    return NextResponse.json(updateResult);
}