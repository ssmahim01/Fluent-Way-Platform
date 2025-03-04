"use client";
import { useRef } from "react";
import { ImWhatsapp } from "react-icons/im";
import { MdEmail, MdOutlineMessage } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Heading from "./Heading";
import { handleSend } from "../util/handleSend";

const ConnectWithUs = () => {
  const form = useRef();

  return (
    <div className="pt-20 pb-16">
      <Heading title={"Connect With Us"} subTitle={"Send your valuable message by your name and email"} />

      <div className="lg:pt-0 pt-4 w-11/12 mx-auto flex lg:flex-row-reverse flex-col justify-between border border-neutral-200 dark:border-neutral-600 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 rounded-lg">
        <div className="lg:w-1/2 p-4 lg:border-l border-l-neutral-300 dark:border-l-neutral-600 border-b-neutral-300 dark:border-b-neutral-600 lg:ml-6 lg:border-b-0 border-b">
          <figure className="w-full lg:h-[500px] md:h-[470px] h-72">
            <img
              className="w-full h-full object-cover rounded-xl"
              src="/assets/ss-mahim.jpeg"
              alt="Image of developer"
              fetchPriority="high"
            />
          </figure>

          <div className="pt-5 pl-4 space-y-3">
            <h4 className="md:text-xl flex gap-x-2 items-center">
              <MdEmail className="md:text-2xl text-xl text-indigo-500" />{" "}
              <span className="font-semibold">
                saymanshakilmahim03@gmail.com
              </span>
            </h4>

            <h4 className="md:text-xl flex gap-x-2 items-center">
              <ImWhatsapp className="md:text-2xl text-xl text-lime-500" />{" "}
              <span className="font-semibold">+8801818788816</span>
            </h4>
          </div>
        </div>

        <div className="lg:w-1/2">
          <form ref={form} onSubmit={(e) => handleSend(e, form)} className="space-y-4 p-7">
            <h2 className="text-3xl font-extrabold pb-2">Send Your Message</h2>

            <input
              type="text"
              name="from_name"
              placeholder="Write your Name"
              className="pl-2 text-neutral-600 dark:text-neutral-300 font-semibold py-2 w-full rounded-md border border-neutral-400"
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Type your Email"
              className="pl-2 text-neutral-600 dark:text-neutral-300 font-semibold py-2 w-full rounded-md border border-neutral-400"
              required
            />

            <textarea
              name="message"
              placeholder="Write your message..."
              className="pl-3 text-neutral-600 dark:text-neutral-300 font-semibold pt-2 md:h-40 h-28 w-full rounded-md border border-neutral-400"
            ></textarea>

            <div className="mt-6">
              <Button variant="default">
                <p className="flex gap-2 items-center">
                  <MdOutlineMessage className="text-2xl" />
                  <span className="text-base font-bold">Send Message</span>
                </p>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
