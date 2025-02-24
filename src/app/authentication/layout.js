import "../globals.css";

export default function AuthLayout({ children }) {
  return (
        <section className="py-[4rem] min-h-[calc(100vh-100px)]">
        {children}
        </section>
  );
}