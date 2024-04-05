import { Spin } from "antd";
import React from "react";

import ImageCard from "./ImageCard";

const MediaContainer = ({ items, loading = false }) => {
  return loading ? (
    <div className="flex h-screen justify-center items-center">
      <Spin spinning={loading} />
    </div>

  ) : items?.length === 0 ? (
    <div className="flex h-56 justify-center items-center">Nothing Found!</div>
    
  ) : (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-4">
      {items?.map((photo, index) => (
        <ImageCard image={photo} key={index} />
      ))}
    </div>
  );
};

export default MediaContainer;
