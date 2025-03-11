
import NextAuthProvider from "@/providers/NextAuthProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutWrapper = ({ children }) => {

  return (
    <>
      <NextAuthProvider>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </NextAuthProvider>
    </>
  );
};

export default LayoutWrapper;
