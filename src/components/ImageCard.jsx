import { Button } from "antd";
import React from "react";
import { PiHeartDuotone } from "react-icons/pi";
import { TbMinusVertical } from "react-icons/tb";
import { TfiDownload } from "react-icons/tfi";


const ImageCard = ({ image }) => {
   
  return (
    <>
      <div className="mx-auto w-full relative">
        <img
          src={image?.src?.original}
          alt={"image"}
          className="w-full h-auto hover:grayscale "
        />

        <div className="absolute top-2 right-2 space-x-2">
          <Button shape="circle" icon={<PiHeartDuotone />} />
          <Button shape="circle" icon={<TbMinusVertical />} />
        </div>

        <div className="flex absolute bottom-2 left-2 gap-2 items-center">
          <img
            src={image?.src?.original} //there are no images for photographer
            alt="Image"
            className="w-8 h-8 border-2 rounded-2xl"
          />
          <p className="text-zinc-300 text-bold">{image?.photographer}</p>
        </div>

        <div className="absolute bottom-2 right-2">
          <Button shape="circle" icon={<TfiDownload />} />
        </div>
      </div>
    </>
  );
};

export default ImageCard;
