import ChooseCourse from "./components/ChooseCourse";
import Hero from "./components/Hero";

const HomePage = () => {
  return (
    <div className="lg:pt-[4rem] pt-[3.5rem] pb-[2rem]">
      {/* Hero Section */}
      <Hero />

      {/* Choose Course Section */}
      <ChooseCourse />
    </div>
  );
};

export default HomePage;