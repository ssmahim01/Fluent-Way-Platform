"use client";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { FaCalendarCheck } from "react-icons/fa";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import StarRatings from "react-star-ratings";
import { BsPersonCheckFill } from "react-icons/bs";
import Heading from "./Heading";

const CourseDetails = ({ course }) => {
  return (
    <div className="mt-4 mb-10">
        <Heading title={"Course Details"} subTitle={`Explore the details of ${course?.title} and discover how it can enhance your skills. Enroll to begin your learning journey today!`} />
      <div className="lg:w-4/5 w-11/12 mx-auto rounded-lg flex flex-col lg:flex-row justify-between items-center gap-8 p-5 shadow-md border border-neutral-200">
        <figure className="lg:w-3/4 w-full">
          <img
            className="w-full rounded-md"
            src={course?.image}
            alt={course?.title}
          />
        </figure>
        <div className="w-full space-y-3">
          <h2 className="md:text-4xl text-2xl font-extrabold">{course?.title}</h2>
          <div className="flex justify-between items-center">
            <p className="md:text-xl flex gap-1 items-center font-semibold">
              <span className="font-bold">Price:</span>{" "}
              <PiCurrencyDollarSimpleFill className="text-2xl" />{" "}
              <span>{course?.price}</span>
            </p>

            <div className="flex items-center gap-2">
              <StarRatings
                rating={course?.rating}
                starRatedColor="gold"
                numberOfStars={5}
                name="rating"
                starDimension="24px"
                starSpacing="2px"
              />

              <button className="text-sm p-3 bg-gray-100 hover:cursor-pointer rounded-full font-semibold">
                {course?.rating}
              </button>
            </div>
          </div>

          <p className="font-medium">{course?.description}</p>

          <div className="flex justify-between items-center">
            <p className="flex gap-2 items-center md:text-xl">
              <span className="font-bold">Level:</span>
              <BsPersonCheckFill className="text-xl" /> 
              <span className="font-semibold">{course?.level}</span>
            </p>

            <p className="flex gap-2 items-center md:text-xl">
              <span className="font-bold">Likes:</span>
              <BiSolidLike className="text-xl" />
              <span className="font-semibold">{course?.likes}</span>
            </p>
          </div>

              <div className="pt-2 flex justify-between items-center">
                <button className="hover:bg-zinc-100 rounded-md p-2">
                  <BiLike className="text-2xl" />
                </button>

                <button className="p-[3px] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent flex gap-2 items-center">
                    <span>Enroll Course</span>
                    <FaCalendarCheck className="text-xl" />
                  </div>
                </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
