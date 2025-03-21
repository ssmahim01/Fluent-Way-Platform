"use client";
import { motion } from "motion/react";
import {
  ModalContent,
  ModalFooter,
  useModal,
} from "@/components/ui/animated-modal";
import { IoBook, IoDocumentText, IoTimer } from "react-icons/io5";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { CircleX } from "lucide-react";

export function EnrollModal({ course, session }) {
  const images = ["/assets/fluent-way.webp", `${course?.image}`];
  const [number, setNumber] = useState("");
  const router = useRouter();
  const { setOpen } = useModal();
  const handleCancel = () => {
    setOpen(false);
  };

  const handleBook = async () => {
   const name = session?.user?.name;
   const email = session?.user?.email;

    const courseTitle = course?.title;
    const courseImage = course?.image;
    const coursePrice = course?.price;
    const courseDuration = course?.duration;

    try {
      const bookInfo = {
        name,
        email,
        number,
        courseImage,
        courseTitle,
        coursePrice,
        courseDuration,
        status: "In-Progress"
      };
      // console.table(bookInfo);

      const response = await fetch(
        "https://fluent-way.vercel.app/api/booked-course",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookInfo),
        }
      );

      if (response.ok && session?.user?.email) {
        router.refresh();
        setOpen(false);
        Swal.fire({
          title: "Successful!",
          text: "You have booked in this course.",
          icon: "success",
          timer: 2500,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      // console.log(error);

      Swal.fire({
        title: "Failed!",
        text: `${error.message}` || "Something went wrong!",
        icon: "error",
        timer: 3500,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="overflow-y-scroll overflow-x-hidden flex flex-col">
      <div className="w-full space-y-3">
        <ModalContent>
          <h4 className="text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mt-2 mb-4">
            Book your course to{" "}
            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
              {course?.title}
            </span>{" "}
            now! 📚
          </h4>
          <div className="flex gap-1 items-center">
            {images.map((image, idx) => (
              <motion.div
                key={"images" + idx}
                style={{
                  rotate: Math.random() * 20 - 10,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 0,
                  zIndex: 100,
                }}
                whileTap={{
                  scale: 1.1,
                  rotate: 0,
                  zIndex: 100,
                }}
                className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 w-1/2 overflow-hidden"
              >
                <img
                  src={image}
                  alt="course images"
                  className="rounded-lg h-36 w-full md:h-48 object-cover flex-shrink-0"
                />
              </motion.div>
            ))}
          </div>

          <div className="pt-10 flex items-center justify-start font-semibold">
            <IoDocumentText className="mr-1 text-neutral-700 dark:text-neutral-300 h-6 w-6" />
            <span className="text-neutral-700 dark:text-neutral-300 text-lg">
              {course?.title}
            </span>
          </div>

          <div className="pt-3 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm">
            <div className="flex items-center justify-center">
              <Image alt="\" src={"https://img.icons8.com/ios-filled/50/us-dollar-circled--v2.png"} height={35} width={28} />
              <span className="text-neutral-700 dark:text-neutral-300 text-base">
                {course?.price}
              </span>
            </div>
            <div className="flex items-center justify-center">
              <IoTimer className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
              <span className="text-neutral-700 dark:text-neutral-300 text-base">
                {course?.duration}
              </span>
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="name" className="font-bold">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                readOnly
                defaultValue={session?.user?.name}
                className="pl-2 font-semibold py-2 w-full rounded-md border border-neutral-400"
                required
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="email" className="font-bold">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                readOnly
                defaultValue={session?.user?.email}
                className="pl-2 font-semibold py-2 w-full rounded-md border border-neutral-400"
                required
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="number" className="font-bold">
                Your Contact Number:
              </label>
              <input
                type="number"
                name="contactNumber"
                onChange={(e) => setNumber(e.target.value)}
                min={11}
                placeholder="Provide your contact number"
                className="pl-2 font-semibold py-2 w-full rounded-md border border-neutral-400"
                required
              />
            </div>
          </div>
        </ModalContent>
        <ModalFooter className="pt-0 flex gap-4 justify-center items-center">
          <button
            onClick={handleCancel}
            className="p-2 bg-neutral-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-base w-40 font-bold flex gap-1 justify-center items-center"
          >
            <CircleX className="text-lg" />
            <span className="text-base">Cancel</span>
          </button>
          <button type="submit" onClick={handleBook} className="bg-black text-white dark:bg-white dark:text-black p-2 rounded-md border border-black w-40 font-bold flex gap-2 justify-center items-center">
          <IoBook className="text-xl" />
          <span className="text-base">Book Now</span>
          </button>
        </ModalFooter>
      </div>
    </div>
  );
}
