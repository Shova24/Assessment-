import { notification } from "antd";

const ErrorHandler = (error) => {
  if (!error?.response?.data?.message) {
    return notification.open({
      message: "Something went wrong! Please try again",
    });
  } else
    return notification.open({
      message: error?.response?.data?.message,
    });
};

export default ErrorHandler;
