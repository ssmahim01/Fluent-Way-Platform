"use client";
import {
  ModalContent,
  ModalFooter,
  useModal,
} from "@/components/ui/animated-modal";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoDocumentText, IoTimer } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { HiOutlineSaveAs } from "react-icons/hi";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import Swal from "sweetalert2";

const EditBooking = ({ booking }) => {
  const images = ["/assets/fluent-way.webp", `${booking?.courseImage}`];
  const router = useRouter();
  const { data: session } = useSession();
  const [number, setNumber] = useState(booking?.number);
  const [status, setStatus] = useState(booking?.status);
  const { setOpen } = useModal();

  const handleCancel = () => {
    setOpen(false);
  };

  const handleEdit = async () => {
    try {
      const editInfo = {
        number,
        status,
      };

      const response = await fetch(
        `http://localhost:3000/api/booked-course/${booking?._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editInfo),
        }
      );

      if (response.ok && session?.user?.email) {
        router.refresh();
        router.prefetch("/booked-courses");
        setOpen(false);
        Swal.fire({
          title: "Successful!",
          text: "Your booking has been updated",
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
            Update your booking in{" "}
            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
              {booking?.courseTitle}
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
                  alt="Booking course images"
                  className="rounded-lg h-36 w-full md:h-48 object-cover flex-shrink-0"
                />
              </motion.div>
            ))}
          </div>

          <div className="pt-10 flex items-center justify-start font-semibold">
            <IoDocumentText className="mr-1 text-neutral-700 dark:text-neutral-300 h-6 w-6" />
            <span className="text-neutral-700 dark:text-neutral-300 text-lg">
              {booking?.courseTitle}
            </span>
          </div>

          <div className="pt-3 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm">
            <div className="flex items-center justify-center">
              <PiCurrencyDollarSimpleFill className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
              <span className="text-neutral-700 dark:text-neutral-300 text-base">
                {booking?.coursePrice}
              </span>
            </div>
            <div className="flex items-center justify-center">
              <IoTimer className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
              <span className="text-neutral-700 dark:text-neutral-300 text-base">
                {booking?.courseDuration}
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
                className="pl-2 text-neutral-600 dark:text-neutral-300 font-semibold py-2 w-full rounded-md border border-neutral-400"
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
                className="pl-2 text-neutral-600 dark:text-neutral-300 font-semibold py-2 w-full rounded-md border border-neutral-400"
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
                defaultValue={booking?.number}
                onChange={(e) => setNumber(e.target.value)}
                min={11}
                placeholder="Provide your contact number"
                className="pl-2 text-neutral-500 dark:text-neutral-300 font-semibold py-2 w-full rounded-md border border-neutral-400"
                required
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="status" className="font-bold">
                Select a Status
              </label>
              <select
                defaultValue={booking?.status}
                name="status"
                onChange={(e) => setStatus(e.target.value)}
                className="py-3 pl-2 rounded-md cursor-pointer border border-neutral-300 focus:border-2 focus:border-indigo-500 text-neutral-500 dark:text-neutral-300 w-full max-w-md *:font-semibold"
              >
                <option disabled>Change Status</option>
                <option value="Cancel">Cancel</option>
                <option value="In-Progress">In-Progress</option>
                <option value="Done">Done</option>
              </select>
            </div>
          </div>
        </ModalContent>
        <ModalFooter className="pt-0 flex gap-4 justify-center items-center">
          <button
            onClick={handleCancel}
            className="p-2 bg-neutral-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-base w-40 font-bold flex gap-1 justify-center items-center"
          >
            <MdCancel className="text-lg" />
            <span className="text-base">Cancel</span>
          </button>
          <button
            type="submit"
            onClick={handleEdit}
            className="bg-black text-white dark:bg-white dark:text-black p-2 rounded-md border border-black w-44 font-bold flex gap-2 justify-center items-center"
          >
            <span className="text-base">Save Changes</span>
            <HiOutlineSaveAs className="text-xl" />
          </button>
        </ModalFooter>
      </div>
    </div>
  );
};

export default EditBooking;
