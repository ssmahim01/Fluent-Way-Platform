import connectMongoDB from "@/lib/connectMongoDB";
import CoursesCard from "./CoursesCard";
import Heading from "./Heading";

const ChooseCourse = async () => {
  const coursesData = connectMongoDB("allCourses");
  const findCourses = coursesData.find({}).limit(6);
  const courses = await findCourses.toArray();
  // console.log(courses);
  return (
    <div className="lg:w-4/5 w-11/12 mx-auto mb-10">
      <Heading title={"Services For You"} subTitle={"Some courses are available in here, you can read more by one click and enroll your desired course"} />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {courses.map(course => (
            <CoursesCard key={course?._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default ChooseCourse;
