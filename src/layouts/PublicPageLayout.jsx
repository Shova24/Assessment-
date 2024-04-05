import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

const PublicPageLayout = () => {
  return (
    <div className="min-w-2xl px-8 md:px-12 xl:px-20">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default PublicPageLayout;
