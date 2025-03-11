"use client";

import StarRatings from "react-star-ratings";
import Heading from "./Heading";
import { IoTimer } from "react-icons/io5";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { Modal, ModalBody, ModalTrigger } from "@/components/ui/animated-modal";
import { EnrollModal } from "./EnrollModal";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";

const CourseDetails = ({ course }) => {
  const { data: session } = useSession();
  const [liked, setLiked] = useState(course?.likedBy?.includes(session?.user?.email));

  const router = useRouter();
  const handleUpdateLike = async (id) => {
    // console.log(id);
    const response = await fetch(`https://fluent-way.vercel.app/api/course/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: session?.user?.email }),
    });

    if (response.ok) {
      setLiked(!liked);
      router.refresh();
      Swal.fire({
        title: `${liked? "Removed like" : "Liked!"}`,
        text: `${liked
          ? "You removed your like."
          : "You have liked this course."}`,
        icon: "success",
        timer: 2500,
        showConfirmButton: false,
      });
    }
  };
  return (
    <div className="pt-20 pb-10">
      <Heading
        title={"Course Details"}
        subTitle={`Explore the details of ${course?.title} and discover how it can enhance your skills. Enroll to begin your learning journey today!`}
      />

      <div className="lg:w-4/5 w-11/12 mx-auto rounded-lg flex flex-col lg:flex-row justify-between items-center lg:gap-8 gap-4 p-4 shadow-md border border-neutral-200 dark:border-neutral-700 dark:shadow-xl">
        <figure className="lg:w-1/2 w-full lg:h-96 md:h-80 h-64">
          <img
            className="w-full h-full rounded-md object-cover"
            src={course?.image}
            alt={course?.title}
          />
        </figure>
        <div className="lg:w-1/2 w-full space-y-3 pr-2">
          <h2 className="md:text-4xl text-3xl font-bold">{course?.title}</h2>
          <div className="flex justify-between items-center">
            <p className="md:text-xl flex gap-1 items-center font-semibold">
              <span className="font-bold">Price:</span>{" "}
              <Image alt="\" src={"https://img.icons8.com/ios-filled/50/us-dollar-circled--v1.png"} height={30} width={28} />{" "}
              <span>{course?.price}</span>
            </p>

            <p className="flex gap-2 items-center md:text-xl">
              <span className="font-bold">Duration:</span>
              <IoTimer className="md:text-xl text-lg" />
              <span className="font-semibold">{course?.duration}</span>
            </p>
          </div>

          <div className="flex items-center gap-x-2">
            <StarRatings
              rating={course?.rating}
              starRatedColor="gold"
              numberOfStars={5}
              name="rating"
              starDimension="24px"
              starSpacing="2px"
            />

            <button className="text-sm py-2 px-3 bg-neutral-200 dark:bg-neutral-700 hover:cursor-pointer rounded-full font-semibold">
              {course?.rating}
            </button>
          </div>

          <div>
            <p className="font-medium">{course?.description}</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="flex gap-2 items-center md:text-xl">
              <span className="font-bold">Level:</span>
              <Image alt="\" src={"https://img.icons8.com/ios-glyphs/30/checked-user-male.png"} height={30} width={28} />
              <span className="font-medium">{course?.level}</span>
            </p>

            <p className="flex gap-2 items-center md:text-xl">
              <span className="font-bold">Likes:</span>
              <Image alt="\" src={"https://img.icons8.com/material-sharp/24/facebook-like--v1.png"} height={30} width={28} />
              <span className="font-medium">{course?.likes}</span>
            </p>
          </div>

          <div className="pt-3 flex justify-between items-center">
            <button
              type="button"
              onClick={() => handleUpdateLike(course?._id)}
              className="hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-md p-2 cursor-pointer"
            >
              {liked ? (
                <Image alt="\" src={"https://img.icons8.com/material-sharp/24/facebook-like--v1.png"} height={30} width={28} />
              ) : (
                <Image alt="\" src={"https://img.icons8.com/material-outlined/50/facebook-like--v1.png"} height={30} width={28} />
              )}
            </button>

            <Modal>
              <ModalTrigger className="text-white flex justify-center group/modal-btn">
                <button className="p-[3px] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                  <div className="px-8 py-2 bg-black rounded-[6px]  relative group text-white hover:bg-transparent flex gap-2 items-center font-bold group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                    <span>Enroll Course</span>
                    <Image alt="\" src={"https://img.icons8.com/sf-black-filled/64/today.png"} height={30} width={28} />
                  </div>
                </button>
                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20 text-2xl">
                  📚
                </div>
              </ModalTrigger>
              <ModalBody>
                <EnrollModal course={course} session={session} />
              </ModalBody>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
