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
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const { setTheme } = useTheme();
  const pathname = usePathname() || ""; // Ensure pathname is always a string
  const authRoutes = ["/authentication/login", "/authentication/register"];
  const isAuthPage = authRoutes.includes(pathname);

  const navigationMenu = (
    <>
      <ActiveLink href="/">Home</ActiveLink>
      <ActiveLink href="/all-courses">Available Courses</ActiveLink>
      {session?.user && (
        <ActiveLink href="/booked-courses">Booked Courses</ActiveLink>
      )}
      <ActiveLink href="/about-us">About Us</ActiveLink>
      <ActiveLink href="/contact">Contact</ActiveLink>
    </>
  );



  if (!isAuthPage) {
    return (
      <div className="w-full fixed z-20 py-2 lg:px-12 md:px-8 px-4 shadow-sm border-b border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800">
        <div className="flex justify-between items-center">
          <section className="flex gap-2 items-center">
            {/* Menu Toggle */}
            <div className="lg:hidden block">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="pt-3 pb-4 flex flex-col">
                  <div className="flex gap-1 items-center border-b border-neutral-200 dark:border-neutral-700 shadow-sm px-5 pb-2">
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

                  <ul className="mt-6 px-5 flex flex-col space-y-6 text-base font-semibold">
                    {navigationMenu}
                  </ul>

                  <div className="mt-60 w-4/5 mx-auto">
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
                            <p className="md:text-sm text-xs md:pr-0 pr-4">{session?.user?.email}</p>
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
                      <div className="flex gap-3 w-full justify-between items-center">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                              <span className="sr-only">Toggle theme</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                              Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                              Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                              System
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Login Button */}
                        <LoginButton />
                      </div>
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

            {/* Desktop Navigation */}
            <ul className="ml-5 lg:flex hidden justify-center items-center gap-4 *:font-semibold text-opacity-70">
              {navigationMenu}
            </ul>
          </section>

          <div className="flex gap-6 items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {status === "authenticated" ? (
              <div className="lg:flex hidden gap-2 items-center">
                <img
                  className="relative rounded-full w-12 h-12 border-4 border-amber-400"
                  src={session?.user?.image}
                  alt={session?.user?.name}
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                />

                <p className="relative bottom-[17px] right-[18px] bg-green-500 rounded-full w-[10px] h-[10px]"></p>

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
      </div>
    );
  }

};

export default Navbar;
