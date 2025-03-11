"use client"

import { MdReadMore } from "react-icons/md";
import { IoTimer } from "react-icons/io5";
import StarRatings from "react-star-ratings";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const CoursesCard = ({ course }) => {
  // console.log(course)
  return (
    <Card className="w-full sm:w-auto rounded-xl border border-neutral-200 dark:border-white/[0.2] shadow-sm hover:shadow-md transition-all">
    <CardHeader>
      <Image
        src={course?.image}
        alt={course?.title}
        height={1000}
        width={1000}
        className="h-60 w-full object-cover rounded-xl"
      />
    </CardHeader>
    <CardContent className="p-4">
      <CardTitle className="text-xl font-bold text-neutral-800 dark:text-white">
        {course?.title}
      </CardTitle>
      <CardDescription className="text-neutral-600 text-sm dark:text-neutral-300 mt-2">
        {course?.description.slice(0, 80)}...
      </CardDescription>

      <div className="flex justify-between items-center mt-3">
        <p className="text-lg font-bold text-neutral-800 dark:text-white flex gap-1 items-center">
          <Image alt="\" src={"https://img.icons8.com/ios-filled/50/us-dollar-circled--v2.png"} height={35} width={28} />
          <span>{course?.price}</span>
        </p>
        <p className="text-lg font-bold text-neutral-800 dark:text-white flex gap-1 items-center">
          <IoTimer className="text-2xl" />
          <span>{course?.duration}</span>
        </p>
      </div>

      <div className="flex justify-between items-center mt-3">
        <StarRatings
          rating={course?.rating || 0}
          starRatedColor="gold"
          numberOfStars={5}
          name="rating"
          starDimension="24px"
          starSpacing="2px"
        />
        <Link
          href={`/course/${course?._id}`}
          className="px-4 py-2 rounded-md bg-neutral-900 dark:bg-white dark:text-black text-white flex gap-1 items-center font-bold"
        >
          <span>Read More</span>
          <MdReadMore className="text-2xl" />
        </Link>
      </div>
    </CardContent>
  </Card>
  );
};

export default CoursesCard;
