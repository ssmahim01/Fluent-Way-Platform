import "../globals.css";

export default function AuthLayout({ children }) {
  return (
        <section className="py-24 min-h-screen bg-cover bg-center" style={{
          backgroundImage: "url('/assets/authentication-bg.jpg')",
          backgroundRepeat: "no-repeat",
      }}>
        {children}
        </section>
  );
}