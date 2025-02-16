"use client";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaMessage } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  const form = useRef();
  const [currentYear, setCurrentYear] = useState("");
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        form.current,
        process.env.PUBLIC_KEY
      )
      .then((result) => {
        console.log(result.text);
        e.target.reset();

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Message sent successfully!",
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .catch((error) => {
        // console.log(error.text);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Failed to send the message! Please try again later.",
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  return (
    <footer className="border-t border-zinc-200 shadow-md">
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

            <p className="lg:text-base font-medium text-sm">
              We strive to provide high-quality language courses. Users can
              enroll in their desired course and contact us directly with any
              questions.
            </p>

            <div className="flex gap-4 items-center *:cursor-pointer">
              <Link href="https://www.facebook.com/ssmahim" target="_blank">
                <FaFacebook className="text-cyan-600 w-10 h-10" />
              </Link>
              <Link href="https://github.com/ssmahim01" target="_blank">
                <SiGithub className="text-zinc-800 w-10 h-10" />
              </Link>
              <Link href="https://www.instagram.com/iammz01" target="_blank">
                <FaInstagram className="text-rose-500 w-10 h-10" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sayman-shakil-mahim"
                target="_blank"
              >
                <FaLinkedin className="text-indigo-600 w-10 h-10" />
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
          <h2 className="lg:text-4xl text-3xl md:text-left text-center font-bold pb-5">
            Connect with Us
          </h2>

          <form className="space-y-3" ref={form} onSubmit={handleSendMessage}>
            <div>
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                className="w-full shadow-violet-200 shadow-sm border border-violet-100 py-3 pl-4 rounded-md"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="from_email"
                placeholder="Email"
                className="pl-4 w-full py-3 shadow-violet-200 shadow-sm border border-violet-100 rounded-md"
                required
              />
            </div>

            <div className="pb-2">
              <textarea
                name="message"
                placeholder="Message"
                className="w-full h-32 shadow-violet-200 shadow-sm border border-violet-100 pt-2 pb-20 pl-4 rounded-md"
              ></textarea>
            </div>

            <div>
              <Button
                type="submit"
                variant="default"
                className="flex gap-2 items-center text-base font-bold px-6"
              >
                <FaMessage /> <span>Send Message</span>
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="pb-2 px-4 text-white bg-zinc-800">
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
