import CourseDetails from "@/app/components/CourseDetails";
import connectMongoDB from "@/lib/connectMongoDB";
import { ObjectId } from "mongodb";

export default async function Course({ params }) {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const singleCourseData = connectMongoDB("allCourses");
  const course = await singleCourseData.findOne(query);

  return <CourseDetails course={course} />;
}
