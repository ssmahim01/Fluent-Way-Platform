"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { RiMenuFold2Fill } from "react-icons/ri";
import LoginButton from "./LoginButton";
import { signOut, useSession } from "next-auth/react";
import { FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();

  const navigationMenu = (
    <>
      <Link href="/">Home</Link>
      <Link href="/all-courses">All Courses</Link>
      <Link href="/enrolled-courses">Enrolled Courses</Link>
      <Link href="/about-us">About Us</Link>
      <Link href="/contact">Contact</Link>
    </>
  );

  return (
    <div className="w-full fixed z-20 py-2 lg:px-12 md:px-8 px-4 shadow-sm border-b border-zinc-100 bg-zinc-200">
      <div className="flex justify-between items-center">
        <section className="flex gap-2 items-center">
          {/* Menu Toggle */}
          <div className="lg:hidden block">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <RiMenuFold2Fill className="text-2xl" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pt-3 pb-8">
                <div className="flex gap-1 items-center border-b border-violet-200 shadow-sm px-5 pb-2">
                  <Image
                    src="/assets/fluent-way.webp"
                    alt="Logo"
                    className="rounded-md"
                    width={45}
                    height={45}
                  />
                  <Button variant="ghost">
                    <Link
                      href="/"
                      className="lg:text-3xl md:text-2xl text-xl font-extrabold text-opacity-60"
                    >
                      Fluent<span className="text-orange-500">Way</span>
                    </Link>
                  </Button>
                </div>

                <ul className="mt-5 px-5 flex flex-col space-y-4 text-lg font-semibold">
                  {navigationMenu}
                </ul>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo & Title */}
          <div className="flex gap-1 items-center">
            <Image
              src="/assets/fluent-way.webp"
              alt="Logo"
              className="rounded-md"
              width={44}
              height={44}
            />
            <Button variant="ghost">
              <Link
                href="/"
                className="md:text-2xl text-xl font-extrabold text-opacity-60"
              >
                Fluent<span className="text-orange-500">Way</span>
              </Link>
            </Button>
          </div>
        </section>

        {/* Desktop Navigation */}
        <ul className="lg:flex hidden justify-center items-center gap-6 *:font-semibold text-opacity-70">
          {navigationMenu}
        </ul>

        {status === "authenticated" ? (
          <>
            <Image
              className="rounded-full border-4 border-neutral-500 mr-3"
              src={session?.user?.image}
              alt="Profile Image"
              width={50}
              height={50}
              priority
              referrerPolicy="no-referrer"
            />

            {/* Logout button */}
            <button
              onClick={() => signOut()}
              className="text-white bg-rose-500 border-none py-2 px-5 font-bold flex gap-2 mr-4 items-center rounded-md"
            >
              <FaSignOutAlt className="text-xl" />{" "}
              <span className="text-base">Log Out</span>
            </button>
          </>
        ) : (
          <>
            {/* Login Button */}
            <LoginButton />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
