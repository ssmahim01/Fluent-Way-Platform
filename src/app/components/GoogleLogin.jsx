"use client";
import { IconBrandGoogle } from "@tabler/icons-react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Swal from "sweetalert2";

const GoogleLogin = () => {
  const session = useSession();
  const router = useRouter();

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/" });
  };

  useEffect(() => {
    if (session.status === "loading") return;
    if (session.status === "authenticated") {
      Swal.fire({
        title: "Successful!",
        text: "Successfully logged in via google",
        icon: "success",
        timer: 3500,
        showConfirmButton: false,
      });
      router.push("/");
    }
  }, [session.status]);

  return (
    <>
      <div>
        <button
          onClick={handleGoogleLogin}
          className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full rounded-md h-10 font-medium shadow-input border-2 border-indigo-400 hover:border-none dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          type="submit"
        >
          <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
          <span className="text-neutral-700 font-semibold dark:text-neutral-300 text-sm">
            Google
          </span>
          <BottomGradient />
        </button>
      </div>
    </>
  );
};

export default GoogleLogin;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
