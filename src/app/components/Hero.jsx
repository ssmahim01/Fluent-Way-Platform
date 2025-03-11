
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-neutral-200 dark:bg-neutral-900 shadow-sm dark:shadow-lg pb-3 mb-10">
      <div className="flex lg:flex-row-reverse flex-col lg:w-4/5 w-11/12 mx-auto py-3 justify-between items-center lg:gap-14">
        <div className="flex-1">
          <figure className="md:block hidden">
            <div className="w-full lg:w-4/5 md:w-[450px] lg:h-60 md:h-64 object-cover border-r-8 border-t-8 border-violet-600 rounded-lg animate-floatY overflow-hidden">
              <Image
                width={433}
                height={232}
                priority
                src="/assets/studying-together.jpg"
                alt="Students are studying together"
              />
            </div>
          </figure>

          <figure className="md:block hidden">
            <div className="animate-floatX">
              <Image
                width={500}
                height={300}
                priority
                src="/assets/students-work.jpg"
                alt="Students are studying together"
                className="lg:w-4/5 md:w-[450px] object-cover lg:h-60 md:h-64 border-l-8 border-b-8 border-neutral-700 rounded-lg"
              />
            </div>

          </figure>

          <figure className="md:hidden block mt-3 mb-5">
            <div className="animate-floatY">
              <Image
                width={500}
                height={300}
                src="/assets/studying-together.jpg"
                alt="Students are studying together"
                className="w-full border-r-8 border-t-8 border-violet-600 rounded-lg"
              />
            </div>
          </figure>

          <figure className="md:hidden block">
            <div className="w-full border-l-8 border-b-8 border-neutral-700 rounded-lg animate-floatX">
              <Image
                width={500}
                height={300}
                src="/assets/students-work.jpg"
                alt="Students are learning"
                className="w-full border-l-8 border-b-8 border-neutral-700 rounded-lg"
              />
            </div>
          </figure>
        </div>

        <div className="flex-1 lg:pt-0 pt-5 space-y-3">
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-extrabold">
            Start Learning Today!
          </h2>
          <p className="md:text-base text-sm font-medium pb-5">
            Unlock your potential with expert-led courses in IELTS, Spoken English, and more. Our interactive lessons and practical exercises are designed to help you improve your language skills effectively. Whether you're preparing for an exam, enhancing your communication skills, or learning for personal growth, we provide the right resources to support your journey.
          </p>

          <Link href="/all-courses">
            <Button variant="default" className="flex gap-2 items-center font-bold px-4">
              <span className="text-lg">Get Started</span>
              <FaArrowRight className="text-xl" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
