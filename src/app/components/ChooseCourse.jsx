import CoursesCard from "./CoursesCard";
import Heading from "./Heading";

const fetchCoursesData = async () => {
  const response = await fetch("http://localhost:3000/courses.json");
  const data = await response.json();
  return data.slice(0, 6);
};

const ChooseCourse = async () => {
  const courses = await fetchCoursesData();
  console.log(courses);
  return (
    <div className="lg:w-4/5 w-11/12 mx-auto mb-10">
      <Heading title={"Choose Your Course"} subTitle={"Some courses are available in here, you can read more by one click and enroll your desired course"} />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {courses.map(course => (
            <CoursesCard course={course} />
        ))}
      </div>
    </div>
  );
};

export default ChooseCourse;
