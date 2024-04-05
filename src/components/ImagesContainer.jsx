import { Dropdown, Tabs } from "antd";
import React from "react";
import { RiArrowDropDownFill } from "react-icons/ri";

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

  const items = [
    {
      key: "1",
      label: "Most Recent",
    },
    {
      key: "2",
      label: "Most Viewed",
    },
    {
      key: "3",
      label: "Most Downloaded",
    },
    {
      key: "4",
      label: "Most Appreciated",
    },
  ];

  return (
    <>
      <Tabs
        tabPosition={"top"}
        tabBarExtraContent={
          <Dropdown
            menu={{
              items,
            }}
          >
            <p className="flex items-center gap-2">

            Recommended
            <RiArrowDropDownFill className="w-6 h-6"/>
            </p>
          </Dropdown>
        }
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
