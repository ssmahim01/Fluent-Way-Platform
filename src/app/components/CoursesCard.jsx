"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import { MdReadMore } from "react-icons/md";
import { IoTimer } from "react-icons/io5";
import StarRatings from "react-star-ratings";
import Link from "next/link";

const CoursesCard = ({ course }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-full h-auto rounded-xl pt-1 pb-4 px-5 border">
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={course?.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={course?.title}
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="mt-3 text-xl font-bold text-neutral-800 dark:text-white"
        >
          {course?.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {course?.description.slice(0, 80)}...
        </CardItem>

        <div className="flex justify-between items-center mt-3 pr-3">
          <CardItem translateZ={40} as="p" className="text-neutral-800 dark:text-white flex gap-1 items-center text-lg font-bold">
          <PiCurrencyDollarSimpleFill className="text-2xl" />
            <span>{course?.price}</span>
          </CardItem>
          <CardItem
            translateZ={40}
            as="p"
            className="text-lg text-neutral-800 dark:text-white font-bold flex gap-1 items-center"
          >
            <IoTimer className="text-2xl" />
            <span>{course?.duration}</span>
          </CardItem>
        </div>

        <div className="flex justify-between items-center mt-3">
          <CardItem translateZ={20} as="div">
            <StarRatings
              rating={course?.rating || 0}
              starRatedColor="gold"
              numberOfStars={5}
              name="rating"
              starDimension="24px"
              starSpacing="2px"
            />
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={`/course/${course?.id}`}
            className="px-4 py-2 rounded-md bg-neutral-900 dark:bg-white dark:text-black text-white flex gap-1 items-center font-bold"
          >
            <span>Read More</span>
            <MdReadMore className="text-2xl" />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default CoursesCard;
