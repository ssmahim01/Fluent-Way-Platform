"use client";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NextAuthProvider from "@/providers/NextAuthProvider";

const LayoutWrapper = ({ children }) => {
  const pathname = usePathname() || ""; // Ensure pathname is always a string
  const authRoutes = ["/authentication/login", "/authentication/register"];
  const isAuthPage = authRoutes.includes(pathname);

  return (
    <>
      <NextAuthProvider>
        {!isAuthPage && <Navbar />}
        <main className="bg-neutral-100 dark:bg-neutral-800 py-24 min-h-[calc(100vh-100px)]">
          {children}
        </main>
        {!isAuthPage && <Footer />}
      </NextAuthProvider>
    </>
  );
};

export default LayoutWrapper;
