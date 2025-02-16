import ChooseCourse from "./components/ChooseCourse";
import Hero from "./components/Hero";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Choose Course Section */}
      <ChooseCourse />
    </div>
  );
};

export default HomePage;