"use client";
import { Button } from "@/components/ui/button";
import { CgLogIn } from "react-icons/cg";
import Link from "next/link";

const LoginButton = () => {
  return (
    <Link href="/login">
      <Button variant="default" className="flex gap-2 items-center font-bold">
        <CgLogIn className="text-2xl" />{" "}
        <span className="text-base">Login</span>
      </Button>
    </Link>
  );
};

export default LoginButton;
