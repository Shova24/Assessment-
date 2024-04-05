import { Carousel } from "antd";
import React from "react";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

import category_1 from "../assets/category_1.svg";
import category_2 from "../assets/category_2.svg";
import category_3 from "../assets/category_3.svg";
import category_4 from "../assets/category_4.svg";
import category_5 from "../assets/category_5.svg";
import useScreenSize from "../hooks/use-screen-size ";

const Categories = () => {
  const breakPoint = useScreenSize();

  const images = [
    { id: 1, url: category_1, text: "Workspace" },
    { id: 2, url: category_2, text: "Summer" },
    { id: 3, url: category_3, text: "City" },
    { id: 4, url: category_4, text: "Food" },
    { id: 5, url: category_5, text: "Gravity" },
  ];

  const settings = {
    dots: true,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: breakPoint === "xs" ? 2 : breakPoint === "md" ? 3 : 4,
    slidesToScroll: 1,
    nextArrow: <IoArrowBackCircleOutline />,
    prevArrow: <IoArrowForwardCircleOutline />,
  };

  return (
    <>
      <Carousel
        {...settings}
        className="h-full bg-slate-200 w-full grid-cols-2 flex justify-center gap-2 pb-4"
      >
        {images?.map((image) => (
          <div key={image?.id} className="relative">
        
            <img src={image?.url} alt="image" className="h-full w-full px-4 py-8 " />
    
            <p className="absolute  top-[40%] left-[30%]  h-full w-full font-bold text-white text-lg">
              <span className="bg-[rgb(0,0,0,0.2)] p-4 rounded">

              {image?.text}
              </span>
              </p>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Categories;
