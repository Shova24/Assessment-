import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import PublicPageLayout from "../layouts/PublicPageLayout";

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <PublicPageLayout />,
      children: [
        { element: <Home />, index: true },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
};

export default AppRoutes;
