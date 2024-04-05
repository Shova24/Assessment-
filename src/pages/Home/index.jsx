import HeroSection from "../../components/HeroSection";
import HomeContentsContainer from "../../components/HomeContentsContainer";

const Home = () => {
  return (
    <>
      <div className="md:relative">
        <HeroSection />

        <div className="md:absolute md:top-[90%] lg:top-[80%] md:left-12 md:right-12 space-y-2">
          <p className="text-end text-sm text-black md:text-white font-thin">
            Photo of the Day <span className="text-gray-300">by</span>{" "}
            <span className="underline cursor-pointer">John Doe</span>
          </p>
          
          <HomeContentsContainer />
        </div>
      </div>
    </>
  );
};

export default Home;
