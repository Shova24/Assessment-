import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

const PublicPageLayout = () => {
  return (
    <div className="bg-white">
      <div className="bg-white border-b-[.05px]">
        <Navbar />
      </div>

      <div className="min-w-2xl px-8 md:px-16 xl:px-24">
        <Outlet />
      </div>

    </div>
  );
};

export default PublicPageLayout;