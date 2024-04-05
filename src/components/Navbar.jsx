import { Button, Divider, Dropdown } from "antd";
import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const Navbar = () => {
  const items = [
    {
      key: "1",
      label: <p>About Click Motto</p>,
    },
    {
      key: "2",
      label: <p>Pricing</p>,
    },
    {
      key: "3",
      label: <p>License</p>,
    },
    {
      key: "4",
      label: <p>Partnerships</p>,
    },
    {
      key: "5",
      label: <p>Blog</p>,
    },
    {
      key: "6",
      label: <p>Help</p>,
    },
    {
      key: "7",
      label: <p>Join The Team</p>,
    },
  ];

  const smallScreenItems = [
    {
      key: "9",
      label: <p>Explore</p>,
    },
    {
      key: "9",
      label: <p>Discover</p>,
    },
    {
      key: "9",
      label: <p>For Professionals</p>,
    },
    ...items
  ]

  return (
    <div className="flex items-center justify-between gap-4 py-4 text-sm">
      <img src="/logo.svg" alt="logo" className="w-28 h-8" />

      <div className="flex items-center gap-1 md:gap-4">
        <div className="hidden gap-4 md:flex items-center">
          <p>Explore</p>
          <p>Discover</p>
          <p>For Professionals</p>

          <Dropdown
            menu={{
              items,
            }}
          >
            <HiOutlineDotsHorizontal />
          </Dropdown>

          <Button className="flex items-center justify-center text-zinc-600 border-zinc-600 text-bold">
            Submit Photos
          </Button>

        <Divider type="vertical" className="bg-zinc-600 h-5 " />
        </div>

        <Dropdown
            menu={{
              items: smallScreenItems,
            }}
            className="flex md:hidden"
          >
            <HiOutlineDotsHorizontal />
          </Dropdown>


        <div className="flex justify-end align-center gap-1 md:gap-4">
          <Button type="link" className="text-amber-600">
            Login
          </Button>
          <Button type="primary">Join Free</Button>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
