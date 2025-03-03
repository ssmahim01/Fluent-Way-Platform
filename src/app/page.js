import ChooseCourse from "./components/ChooseCourse";
import Hero from "./components/Hero";

const HomePage = () => {
  return (
    <div className="pt-[3.5rem] pb-[2rem]">
      {/* Hero Section */}
      <Hero />

      {/* Choose Course Section */}
      <ChooseCourse />
    </div>
  );
};

export default HomePage;