import CourseDetails from "@/app/components/CourseDetails";

export const metadata = {
  title: "FluentWay | Course Details",
  description: "Enroll to begin your learning journey",
};

export default async function Course({ params }) {
  const {id} = await params;
    const response = await fetch(`https://fluent-way.vercel.app/api/course/${id}`, {
      method: "GET"
    });
    const course = await response.json();

  return <CourseDetails course={course} />;
}
