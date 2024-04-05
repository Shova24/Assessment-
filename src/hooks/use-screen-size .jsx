// useScreenSize.js
import { useState, useEffect } from "react";

const checkBreakPoint = (point) => {
  if (+point < 640) return "xs";
  if (+point <= 768) return "sm";
  if (+point <= 1024) return "md";
  if (+point <= 1280) return "lg";
  return "2xl";
};

const useScreenSize = () => {
  const [breakPoints, setBreakPoints] = useState(
    checkBreakPoint(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setBreakPoints(checkBreakPoint(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakPoints;
};

export default useScreenSize;
