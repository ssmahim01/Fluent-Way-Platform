import CourseDetails from "@/app/components/CourseDetails";
import { headers } from "next/headers";
// import connectMongoDB from "@/lib/connectMongoDB";
// import { ObjectId } from "mongodb";

export const metadata = {
  title: "FluentWay | Course Details",
  description: "Enroll to begin your learning journey",
};

export default async function Course({ params }) {
  const { id } = await params;
  const response = await fetch(`http://localhost:3000/api/course/${id}`, {
    headers: new Headers(await headers())
});
  const course = await response.json();

  // const query = { _id: new ObjectId(id) };
  // const singleCourseData = connectMongoDB("allCourses");
  // const course = await singleCourseData.findOne(query);

  return <CourseDetails course={course} />;
}
