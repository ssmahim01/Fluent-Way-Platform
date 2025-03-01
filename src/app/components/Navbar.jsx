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
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();

  const navigationMenu = (
    <>
      <ActiveLink href="/">Home</ActiveLink>
      <ActiveLink href="/all-courses">All Courses</ActiveLink>
      {session?.user && (
        <ActiveLink href="/booked-courses">Booked Courses</ActiveLink>
      )}
      <ActiveLink href="/about-us">About Us</ActiveLink>
      <ActiveLink href="/contact">Contact</ActiveLink>
    </>
  );

  return (
    <div className="w-full fixed z-20 py-2 lg:px-12 md:px-8 px-4 shadow-sm border-b border-neutral-100 bg-neutral-50">
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
              <SheetContent side="left" className="pt-3 pb-8 flex flex-col">
                <div className="flex gap-1 items-center border-b border-neutral-200 shadow-sm px-5 pb-2">
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

                <div className="md:mt-24 mt-14 w-4/5 mx-auto">
                  {status === "authenticated" ? (
                    <>
                      <div className="flex w-full md:flex-row flex-col md:gap-2 justify-between">
                        <img
                          className="rounded-full w-14 h-14 border-4 border-amber-400"
                          src={session?.user?.image}
                          alt={session?.user?.name}
                          fetchPriority="high"
                          referrerPolicy="no-referrer"
                        />

                        <div className="flex flex-col md:mt-0 mt-2">
                          <h4 className="font-semibold text-lg">
                            {session?.user?.name}
                          </h4>
                          <p className="text-sm">{session?.user?.email}</p>
                        </div>
                      </div>

                      {/* Logout button */}
                      <div className="mt-4">
                      <button
                        onClick={() => signOut()}
                        className="text-white bg-rose-500 border-none py-2 px-5 font-bold flex gap-2 items-center rounded-md"
                      >
                        <FaSignOutAlt className="text-xl" />{" "}
                        <span className="text-base">Log Out</span>
                      </button>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Login Button */}
                      <LoginButton />
                    </>
                  )}
                </div>
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
                className="md:text-2xl text-xl font-extrabold text-opacity-60 md:block hidden"
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
          <div className="flex gap-2 items-center">
            <img
              className="relative rounded-full w-12 h-12 border-4 border-amber-400"
              src={session?.user?.image}
              alt={session?.user?.name}
              fetchPriority="high"
              referrerPolicy="no-referrer"
            />

            <p className="relative bottom-[16px] right-4 bg-green-500 rounded-full w-2 h-2"></p>

            {/* Logout button */}
            <button
              onClick={() => signOut()}
              className="text-white bg-rose-500 border-none py-2 px-5 font-bold flex gap-2 mr-4 items-center rounded-md"
            >
              <FaSignOutAlt className="text-xl" />{" "}
              <span className="text-base">Log Out</span>
            </button>
          </div>
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
