"use client";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Navbar from "./Navbar";

const LayoutWrapper = ({children}) => {
  const authRoutes = ["/authentication/login", "/authentication/register"];
  const isAuthPage = authRoutes.includes(usePathname());

  return (
    <>
      {!isAuthPage && <Navbar />}
      <main className="bg-neutral-100 dark:bg-neutral-800 pt-6 pb-14 min-h-[calc(100vh-100px)]">{children}</main>
      {!isAuthPage && <Footer />}
    </>
  );
};

export default LayoutWrapper;
