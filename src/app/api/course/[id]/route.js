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
    const { email } = await req.json();
    if (!email) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const query = { _id: new ObjectId(id) };

    const courseCollection = connectMongoDB("allCourses");
    const findCourse = await courseCollection.findOne(query);

    if (!findCourse) {
        return NextResponse.json({ message: "Course not found" }, { status: 404 });
    }

    const likedBy = findCourse?.likedBy || [];
    const option = { upsert: true };
    let updateData = {};

    if (likedBy.includes(email)) {
        // Unlike the course
        updateData = { $pull: { likedBy: email }, $inc: { likes: -1 } }
    } else {
        // Like the course
        updateData = { $push: { likedBy: email }, $inc: { likes: 1 } }
    }

    const updateResult = await courseCollection.updateOne(query, updateData, option);
    revalidatePath(`/course/${findCourse?._id}`);
    return NextResponse.json(updateResult);
}