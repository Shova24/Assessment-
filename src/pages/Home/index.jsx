import HeroSection from "../../components/HeroSection";
import HomeContentsContainer from "../../components/HomeContentsContainer";

const Home = () => {
  return (
    <>
      <div className="relative">
        <HeroSection />
      <div className="absolute top-[80%] left-12 right-12 bg-white ">
        <HomeContentsContainer />
      </div>
      </div>
    </>
  );
};

export default Home;
