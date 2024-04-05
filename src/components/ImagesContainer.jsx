import { Tabs } from "antd";
import React from "react";


import { usePhotoList } from "../api/media";
import MediaContainer from "./MediaContainer";

const ImagesContainer = () => {
  const { data: photos, isLoading: isPhotosLoading } = usePhotoList();

  const mediaTypes = [
    {
      key: 1,
      label: "All",
      children: <MediaContainer items={photos} loading={isPhotosLoading} />,
    },
    {
      key: 2,
      label: "Photos",
      children: <MediaContainer items={photos} loading={isPhotosLoading} />,
    },
    {
      key: 3,
      label: "Videos",
      children: <MediaContainer items={[]} loading={false} />,
    },
    {
      key: 4,
      label: "Freebies",
      children: <MediaContainer items={[]} loading={false} />,
    },
    {
      key: 5,
      label: "360",
      children: <MediaContainer items={[]} loading={false} />,
    },
  ];

  return (
    <>
      <Tabs
        tabPosition={"top"}
        items={mediaTypes?.map((media) => {
          return {
            label: media?.label,
            key: media?.key,
            children: media?.children,
          };
        })}
      />
    </>
  );
};

export default ImagesContainer;
