"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveLink({ href, children }) {
  const pathname = usePathname();

  // Check if the current route matches the link
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-2 py-0 rounded ${
        isActive ? "border-b-4 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-bold" : "text-neutral-700 dark:text-neutral-200"
      }`}
    >
      {children}
    </Link>
  );
}