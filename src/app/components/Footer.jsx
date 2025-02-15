import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="border-t border-zinc-200 shadow-md"
    >
      <div className="lg:w-4/5 w-11/12 mx-auto flex md:flex-row flex-col justify-between items-center lg:px-14 lg:pb-14 p-5 gap-5">
        <div className="md:w-1/2 pt-12">
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
                  className="md:text-3xl text-xl font-extrabold text-opacity-60"
                >
                  Fluent<span className="text-orange-500">Way</span>
                </Link>
              </Button>
            </div>

            <p className="md:text-base font-medium text-sm">
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
              <Link href="https://www.linkedin.com/in/sayman-shakil-mahim" target="_blank">
              <FaLinkedin className="text-indigo-600 w-10 h-10" />
              </Link>
            </div>

            <div className="mt-3 space-y-3">
              <h2 className="md:text-4xl text-3xl font-bold">
                Get In Touch
              </h2>

              <div className="flex gap-2 items-center *:text-lg font-serif font-medium">
                <IoMdCall className="text-emerald-500" /> <span>+88 01818788816</span>
              </div>

              <div className="flex gap-2 items-center *:text-lg font-serif font-medium">
                <MdEmail className="text-violet-600" /> <span>saymanshakilmahim03@gmail.com</span>
              </div>

              <div className="flex gap-2 items-center *:text-lg font-serif font-medium">
                <FaLocationDot /> <span>Shahporan, Sylhet, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-2/5 w-full pt-14 md:pb-0 pb-5">
          <h2 className="text-4xl md:text-left text-center font-bold pb-5">
            Connect with Us
          </h2>

          <form className="space-y-3">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full shadow-violet-200 shadow-sm border border-violet-100 py-3 pl-4 rounded-md"
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                className="pl-4 w-full py-3 shadow-violet-200 shadow-sm border border-violet-100 rounded-md"
                required
              />
            </div>

            <div className="pb-2">
              <input
                placeholder="Message"
                className="w-full h-32 shadow-violet-200 shadow-sm border border-violet-100 pb-20 pl-4 rounded-md"
              ></input>
            </div>

            <Button variant="default" className="text-base font-bold px-6">
              Send Message
            </Button>
          </form>
        </div>
      </div>

      <div className="h-12 text-white bg-zinc-800">
        <p className="font-medium text-center pt-3">
          Copyright © {new Date().getFullYear()} - All Rights Reserved By{" "}
          <span className="font-bold">Fluent</span><span className="text-amber-500 font-bold">Way</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
