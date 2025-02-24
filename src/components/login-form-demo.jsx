"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import GoogleLogin from "@/app/components/GoogleLogin";
import Swal from "sweetalert2";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login form submitted");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const response = await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
      redirect: false,
    });

    if (!response.error) {
      // Check if there is NO error
      Swal.fire({
        title: "Successful!",
        text: `Successfully logged in via ${email}`,
        icon: "success",
        timer: 3500,
        showConfirmButton: false,
      });
      router.push("/");
    } else {
      Swal.fire({
        title: "Failed!",
        text: response.error || "Failed to Login",
        icon: "error",
      });
    }
  };

  return (
    <div className="my-10 max-w-md w-full mx-auto">
      <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200">
        Welcome to Fluent<span className="text-indigo-600">Way</span>
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login via your registered email & password
      </p>
        <GoogleLogin />
      <div className="mt-4 rounded-none md:rounded-xl p-4 md:p-8 shadow-input bg-neutral-200 dark:bg-black">
        
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />
        
        <p className="pt-4 text-neutral-700 font-semibold text-center px-4 pb-4">
          Do not have any account, Please{" "}
          <Link href="/authentication/register">
            <span className="text-indigo-500 font-bold">Register</span>
          </Link>
        </p>
        <form onSubmit={handleLogin}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="Type your email" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="••••••••" type="password" />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-indigo-800 dark:from-indigo-500 dark:to-indigo-900 to-indigo-600 block dark:bg-indigo-500 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Login &rarr;
            <BottomGradient />
          </button>
        </form>
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
