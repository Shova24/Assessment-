import { Input } from "antd";
import React from "react";
import { CiSearch } from "react-icons/ci";

import background from "../assets/heo_cover.svg";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-no-repeat h-[60vh] bg-[image:var(--image-url)] "
      style={{ "--image-url": `url(${background})` }}
    >
      <div className="h-full bg-black opacity-40"></div>

      <div className="absolute inset-0 flex items-center justify-center bg-center bg-cover">
        <div className="w-2/3 space-y-4 lg:w-1/2">
          <p className="px-4 text-4xl text-white">
            Your local source of high quality images and videos directly from
            their creators
          </p>

          <Input
            placeholder="Search photos and videos"
            suffix={<CiSearch />}
            size="large"
            className="rounded-3xl "
          />

          <p className="px-4 text-sm font-thin text-gray-400">
            <span className="text-white">Recommended:</span> summer, food,
            covid-19, real estate, love
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
