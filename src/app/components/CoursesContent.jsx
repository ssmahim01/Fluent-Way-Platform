"use client";
import CoursesCard from "./CoursesCard";
import Heading from "./Heading";

const CoursesContent = ({courses}) => {
  return (
    <div className="lg:w-4/5 w-11/12 mx-auto mt-4 mb-10">
      <Heading
        title={"Available Courses"}
        subTitle={
          "All available courses here are designed to provide students with the best learning experience and services"
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

export default CoursesContent;
