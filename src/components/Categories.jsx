import { Carousel } from "antd";
import React from "react";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";

import category_1 from "../assets/category_1.svg";
import category_2 from "../assets/category_2.svg";
import category_3 from "../assets/category_3.svg";
import category_4 from "../assets/category_4.svg";
import useScreenSize from "../hooks/use-screen-size ";


const Categories = () => {
  const breakPoint = useScreenSize();

  const images = [category_1, category_2, category_3, category_4];

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
        className="h-full w-full grid-cols-2 flex justify-center gap-2"
      >
        {images?.map((image, index) => (
          <img src={image} alt="image" className="h-full w-full p-4 " key={index} />
        ))}

      </Carousel>
    </>
  );
};

export default Categories;
