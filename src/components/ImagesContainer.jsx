import { Tabs } from "antd";
import React from "react";

import category_1 from "../assets/category_1.svg";
import category_2 from "../assets/category_2.svg";

const ImagesContainer = () => {
  const ImageCard = () => {
    return (
      <>
        <img src={category_2} alt={category_1} className="w-full h-auto" />
      </>
    );
  };
  return (
    <>
      <Tabs
        tabPosition={"top"}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: (
              <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-4">
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
              </div>
            ),
          };
        })}
      />
    </>
  );
};

export default ImagesContainer;
