"use client";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState("");
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-700 shadow-md dark:shadow-lg bg-neutral-100 dark:bg-neutral-900">
      <div className="lg:w-4/5 w-11/12 mx-auto flex md:flex-row flex-col justify-between items-center lg:px-14 md:pb-14 p-5 gap-5">
        <div className="md:w-1/2 pt-8">
          <div className="flex flex-col gap-4">
            <div className="flex md:gap-1 items-center">
              <Image
                src="/assets/fluent-way.webp"
                alt="Logo"
                className="rounded-md"
                width={47}
                height={47}
              />
              <Button variant="ghost">
                <Link
                  href="/"
                  className="text-3xl font-extrabold text-opacity-60"
                >
                  Fluent<span className="text-orange-500">Way</span>
                </Link>
              </Button>
            </div>

            <p className="lg:text-base text-neutral-600 dark:text-neutral-300 font-medium text-sm">
              We strive to provide high-quality language courses. Users can
              enroll in their desired course and contact us directly with any
              questions.
            </p>

            <div className="flex gap-4 items-center *:cursor-pointer">
              <Link href="https://www.facebook.com/ssmahim" target="_blank">
                <FaFacebook className="text-cyan-500 w-10 h-10" />
              </Link>
              <Link href="https://github.com/ssmahim01" target="_blank">
                <SiGithub className="text-neutral-800 dark:text-neutral-300 w-10 h-10" />
              </Link>
              <Link href="https://www.instagram.com/iammz01" target="_blank">
                <FaInstagram className="text-rose-500 w-10 h-10" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sayman-shakil-mahim"
                target="_blank"
              >
                <FaLinkedin className="text-indigo-500 w-10 h-10" />
              </Link>
            </div>

            <div className="mt-3 space-y-3">
              <h2 className="lg:text-4xl text-3xl font-bold">Get In Touch</h2>

              <div className="flex gap-2 items-center *:text-lg font-serif font-medium">
                <IoMdCall className="text-emerald-500" />{" "}
                <span>+88 01818788816</span>
              </div>

              <div className="flex gap-2 items-center *:text-lg font-serif font-medium">
                <MdEmail className="text-violet-600" />{" "}
                <span>saymanshakilmahim03@gmail.com</span>
              </div>

              <div className="flex gap-2 items-center *:text-lg font-serif font-medium">
                <FaLocationDot /> <span>Shahporan, Sylhet, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-2/5 w-full md:pt-14 pt-5 md:pb-0 pb-5">
        <div className="flex flex-col gap-1 mb-4">
        <h2 className="lg:text-3xl text-2xl font-bold">Improve Your Fluency</h2>
        <p className="lg:text-base text-neutral-600 dark:text-neutral-300 text-sm font-medium">Watch this exclusive video & learn!</p>
        </div>

          <iframe
            src="https://www.youtube.com/embed/WZiYlv5cjr0?si=nnO6sQHob7L6qAZY"
            className="w-full h-60 rounded-lg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>

      <div className="pb-3 px-4 text-white bg-neutral-900 dark:bg-black">
        <p className="font-medium text-center pt-3">
          Copyright © {currentYear} - All Rights Reserved By{" "}
          <span className="font-bold">Fluent</span>
          <span className="text-amber-500 font-bold">Way</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
