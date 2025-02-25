import CourseDetails from "@/app/components/CourseDetails";
import connectMongoDB from "@/lib/connectMongoDB";
import { ObjectId } from "mongodb";

export const metadata = {
  title: "FluentWay | Course Details",
  description: "Enroll to begin your learning journey",
};

export default async function Course({ params }) {
  const { id } = await params;
  const response = await fetch(`https://fluent-way.vercel.app/api/course/${id}`);
  const course = await response.json();

  // const query = { _id: new ObjectId(id) };
  // const singleCourseData = connectMongoDB("allCourses");
  // const course = await singleCourseData.findOne(query);

  return <CourseDetails course={course} />;
}
