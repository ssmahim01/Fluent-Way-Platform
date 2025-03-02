import { headers } from "next/headers";
// import connectMongoDB from "@/lib/connectMongoDB";
import CoursesCard from "./CoursesCard";
import Heading from "./Heading";

export const fetchCoursesFromDB = async () => {
  const response = await fetch(
    "http://localhost:3000/api/top-courses",
    {
      headers: new Headers(await headers()),
    }
  );
  const data = await response.json();
  return data;
};

const ChooseCourse = async () => {
  const courses = await fetchCoursesFromDB();
  //  const singleCourseData = connectMongoDB("allCourses");
  //   const courses = await singleCourseData.find({}).sort({rating: - 1}).limit(6).toArray();

  return (
    <div className="lg:w-4/5 w-11/12 mx-auto mb-10">
      <Heading
        title={"Services For You"}
        subTitle={
          "Some courses are available in here, you can read more by one click and enroll your desired course"
        }
      />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {courses.map((course) => (
          <CoursesCard key={course?._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default ChooseCourse;
