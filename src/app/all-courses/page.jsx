// import connectMongoDB from "@/lib/connectMongoDB";
import CoursesContent from "../components/CoursesContent";

export const metadata = {
  title: "FluentWay | Available Courses",
  description: "Best courses are designed to provide students",
};

const fetchCoursesFromDB = async () => {
  const response = await fetch("https://fluent-way.vercel.app/api/courses");
  const data = await response.json();
  return data;
};

const AllCourses = async () => {
  const courses = await fetchCoursesFromDB();
  // const singleCourseData = connectMongoDB("allCourses");
  // const courses = await singleCourseData.find({}).toArray();

  return (
    <section className="pt-[4rem] pb-[2rem]">
      <CoursesContent courses={courses} />
    </section>
  );
};
export default AllCourses;
