import "../globals.css";

export const metadata = {
  title: "FluentWay | Login",
  description: "Login with the registered email and password",
};

export default function AuthLayout({ children }) {
  return (
        <section className="pt-[4rem] min-h-[calc(100vh-100px)]">
        {children}
        </section>
  );
}