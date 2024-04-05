import { Input } from "antd";
import React from "react";
import { CiSearch } from "react-icons/ci";

import background from "../assets/heo_cover.svg";

const HeroSection = () => {
  return (
    <div className="relative bg-red-300 ">
      <img src={background} alt="Hero Image" className="w-full " />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="flex flex-col justify-start items-center ">
          <p className="text-white text-2xl">
            Your local source of high quality images and videos directly from
            their creators
          </p>

          <Input
            placeholder="Search photos and videos"
            suffix={<CiSearch />}
            size="large"
            className="rounded-3xl"
          />

          <p className="font-thin text-white text sm">
            Recommended: summer, food, covid-19, real estate, love
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
