import axios from "axios";
import CoursesCard from "./CoursesCard";
import Heading from "./Heading";

const fetchCoursesFromDB = async () => {
  try {
    const response = await axios.get("https://fluent-way.vercel.app/api/top-courses", {
      headers: { "Cache-Control": "no-store" }, 
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};

const ChooseCourse = async () => {
  const courses = await fetchCoursesFromDB();

  return (
    <div className="lg:w-4/5 w-11/12 mx-auto mb-10">
      <Heading
        title="Services For You"
        subTitle="Some courses are available here. Click to read more and enroll in your desired course."
      />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {courses.length > 0 ? (
          courses.map((course) => <CoursesCard key={course._id} course={course} />)
        ) : (
          <p className="text-center text-gray-500">No courses available.</p>
        )}
      </div>
    </div>
  );
};

export default ChooseCourse;
