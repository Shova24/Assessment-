import React from "react";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

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
    speed: 500,
    slidesToShow:
      breakPoint === "xs"
        ? 1
        : breakPoint === "sm" || breakPoint === "md"
        ? 2
        : breakPoint === "lg"
        ? 3
        : 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <IoArrowBackCircleOutline />,
    prevArrow: <IoArrowForwardCircleOutline />,
  };

  return (
    <div className="space-y-4 bg-white border rounded">
      <h1 className="m-4 text-xl font-bold">Top Categories</h1>
      <Slider {...settings}>
        {images?.map((image) => (
          <div key={image?.id}>
            <div
              className="relative bg-cover bg-no-repeat h-[16vh] lg:h-[20vh] mx-4 bg-[image:var(--image-url)] "
              style={{ "--image-url": `url(${image?.url})` }}
            >
              <div className="h-full bg-black opacity-40"></div>
              <p className="absolute inset-0 z-10 flex items-center justify-center text-xl font-bold text-white">
                {image?.text}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Categories;
