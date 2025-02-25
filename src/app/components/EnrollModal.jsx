"use client";
import { motion } from "framer-motion";
import {
  ModalContent,
  ModalFooter,
  useModal,
} from "@/components/ui/animated-modal";
import { MdTitle } from "react-icons/md";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import { IoTimer } from "react-icons/io5";

export function EnrollModal({ course, session }) {
  const handleBook = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.contactNumber.value;

    const courseTitle = course?.title;
    const coursePrice = course?.price;
    const courseDuration = course?.duration;

    const bookInfo = {
      name,
      email,
      number,
      courseTitle,
      coursePrice,
      courseDuration,
    };

    console.table(bookInfo);
  };

  const { setOpen } = useModal();
  const handleCancel = () => {
    setOpen(false);
  };

  const images = ["/assets/fluent-way.webp", `${course?.image}`];

  return (
    <div className="overflow-y-scroll overflow-x-hidden flex flex-col">
      <form onSubmit={handleBook} className="w-full space-y-3">
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
                className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
              >
                <img
                  src={image}
                  alt="course images"
                  width="500"
                  height="500"
                  className="rounded-lg h-32 w-full md:h-44 object-cover flex-shrink-0"
                />
              </motion.div>
            ))}
          </div>

            <div className="pt-10 flex items-center justify-start font-semibold">
              <MdTitle className="mr-1 text-neutral-700 dark:text-neutral-300 h-6 w-6" />
              <span className="text-neutral-700 dark:text-neutral-300 text-lg">
                {course?.title}
              </span>
            </div>

          <div className="pt-3 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm">
            <div className="flex items-center justify-center">
              <PiCurrencyDollarSimpleFill className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
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
                className="pl-2 text-neutral-600 font-semibold py-2 w-full rounded-md border border-neutral-400"
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
                className="pl-2 text-neutral-600 font-semibold py-2 w-full rounded-md border border-neutral-400"
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
                placeholder="Provide your contact number"
                className="pl-2 text-neutral-500 font-semibold py-2 w-full rounded-md border border-neutral-400"
                required
              />
            </div>
          </div>
        </ModalContent>
        <ModalFooter className="pt-0 flex gap-4 justify-center items-center">
          <button
            onClick={handleCancel}
            className="p-2 bg-neutral-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-base w-40 font-bold"
          >
            Cancel
          </button>
          <button className="bg-black text-white dark:bg-white dark:text-black text-base p-2 rounded-md border border-black w-40 font-bold">
            Book Now
          </button>
        </ModalFooter>
      </form>
    </div>
  );
}
