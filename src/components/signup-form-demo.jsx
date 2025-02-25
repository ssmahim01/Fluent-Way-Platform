"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { registerUser } from "@/app/actions/auth/registerUser";
import { useRouter } from "next/navigation";
import GoogleLogin from "@/app/components/GoogleLogin";
import Swal from "sweetalert2";
import Link from "next/link";

export default function SignupForm() {
  const router = useRouter();
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Sign up form submitted");
    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;
    // console.table(name, email, photoUrl, password);

    const res = await registerUser({ name, email, photoUrl, password });
    if (res.acknowledged) {
      Swal.fire({
        title: "Successful!",
        text: `Successfully registered an account of ${name}`,
        icon: "success",
        timer: 3500,
        showConfirmButton: false,
      });
      router.push("/");
    } else {
      Swal.fire({
        title: "Failed!",
        text: "Failed to Login",
        icon: "error",
      });
    }
  };

  return (
    <div className="max-w-md w-11/12 mx-auto">
      <h2 className="font-extrabold text-3xl text-neutral-100">
        Welcome to Fluent<span className="text-orange-500">Way</span>
      </h2>
      <p className="max-w-sm mt-2 text-neutral-300">
        Register by your personal information
      </p>

      <div className="mt-4 rounded-md md:rounded-xl p-6 md:p-8 shadow-input bg-neutral-200 dark:bg-black">
        <form onSubmit={handleRegister}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstName">First name</Label>
              <Input
                id="firstName"
                placeholder="Write your first name"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastName">Last name</Label>
              <Input
                id="lastName"
                placeholder="Write your last name"
                type="text"
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="Type your email" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="photoUrl">Photo URL</Label>
            <Input
              id="photoUrl"
              placeholder="Provide your photo url"
              type="url"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="••••••••" type="password" />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Register &rarr;
            <BottomGradient />
          </button>

          <p className="pt-4 text-neutral-700 font-semibold text-center px-4">
            Already have an account, Please{" "}
            <Link href="/authentication/login">
              <span className="text-indigo-600 font-bold">Login</span>
            </Link>
          </p>
        </form>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />
        <GoogleLogin />
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
