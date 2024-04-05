import HeroSection from "../../components/HeroSection";
import HomeContentsContainer from "../../components/HomeContentsContainer";

const Home = () => {
  return (
    <>
      <div className="md:relative">
        <HeroSection />

      <div className="md:absolute md:top-[90%] lg:top-[80%] md:left-12 md:right-12 bg-white ">
        <HomeContentsContainer />
      </div>
      </div>
    </>
  );
};

export default Home;
