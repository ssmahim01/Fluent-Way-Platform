"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NextAuthProvider from "@/providers/NextAuthProvider";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FluentWay | Home",
  description: "A Language Learning Platform",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const authRoutes = ["/authentication/login", "/authentication/register"];
  const isAuthPage = authRoutes.includes(pathname);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthProvider>
         {!isAuthPage && <Navbar />}
          <main className="pt-[4rem] min-h-[calc(100vh-100px)]">
            {children}
          </main>
          {!isAuthPage && <Footer />}
        </NextAuthProvider>
      </body>
    </html>
  );
}
