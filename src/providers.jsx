import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { useState } from "react";

const Providers = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "E17800",
        },
      }}
    >
       <QueryClientProvider client={queryClient}>

      {children}
       </QueryClientProvider>
    </ConfigProvider>
  );
};

export default Providers;
