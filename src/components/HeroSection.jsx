import { Input } from "antd";
import React from "react";
import { CiSearch } from "react-icons/ci";

import background from "../assets/heo_cover.svg";

const HeroSection = () => {
  return (
    <div className="md:relative h-full">
      <img src={background} alt="Hero Image" className="w-full" />

      <div className="md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 ">
        <div className="flex flex-col justify-center items-start py-8 gap-4 m-auto bg-[rgb(0,0,0,0.2)] p-4 rounded">
          <p className="text-black md:text-white text-2xl">
            Your local source of high quality images and videos directly from
            their creators
          </p>

          <Input
            placeholder="Search photos and videos"
            suffix={<CiSearch />}
            size="large"
            className="rounded-3xl"
          />

          <p className="font-thin text-black md:text-white text-sm">
            Recommended: summer, food, covid-19, real estate, love
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
