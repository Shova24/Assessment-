import { ConfigProvider } from "antd";

const Providers = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "E17800",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default Providers;
