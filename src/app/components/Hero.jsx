"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react"
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="shadow-sm dark:shadow-lg pb-3 mb-10">
      <div className="flex lg:flex-row-reverse flex-col lg:w-4/5 w-11/12 mx-auto py-3 justify-between items-center lg:gap-14">
        <div className="flex-1">
          <figure className="md:block hidden">
            <motion.img
            fetchPriority="high"
              animate={{ y: [20, 40, 20] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="lg:w-4/5 md:w-[450px] object-cover lg:h-60 md:h-64 border-r-8 border-t-8 border-violet-600 rounded-lg"
              src="/assets/studying-together.jpg"
              alt="Students are studying together"
            />
          </figure>

          <figure className="md:block hidden">
            <motion.img
            fetchPriority="high"
              animate={{ x: [30, 80, 30] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="lg:w-4/5 md:w-[450px] object-cover lg:h-60 md:h-64 border-l-8 border-b-8 border-neutral-700 rounded-lg"
              src="/assets/students-work.jpg"
              alt="Students are learning"
            />
          </figure>

          <figure className="md:hidden block mt-3 mb-5">
            <img
            fetchPriority="high"
              className="w-full border-r-8 border-t-8 border-violet-600 rounded-lg"
              src="/assets/studying-together.jpg"
              alt="Students are studying together"
            />
          </figure>

          <figure className="md:hidden block">
            <img
            fetchPriority="high"
              className="w-full border-l-8 border-b-8 border-neutral-700 rounded-lg"
              src="/assets/students-work.jpg"
              alt="Students are learning"
            />
          </figure>
        </div>

        <div className="flex-1 lg:pt-0 pt-5 space-y-3">
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-extrabold">
            Start Learning Today!
          </h2>
          <p className="md:text-base text-sm font-medium pb-5">
          Unlock your potential with expert-led courses in IELTS, Spoken English, and more. Our interactive lessons and practical exercises are designed to help you improve your language skills effectively. Whether you're preparing for an exam, enhancing your communication skills, or learning for personal growth, we provide the right resources to support your journey.
          </p>

           <Button variant="default">
          <Link href="/all-courses" className="flex gap-2 items-center font-bold px-4">
            <span className="text-lg">Get Started</span>
            <FaArrowRight className="text-xl" /> 
          </Link>
           </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
