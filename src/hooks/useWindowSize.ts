import { useLayoutEffect, useState } from "react";

const SMALL_SCREEN_BREAKPOINT = 720; // Value copied from base.scss

export const useWindowSize = () => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
    isSmallScreen: false,
  });

  useLayoutEffect(() => {
    const updateSize = () =>
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isSmallScreen: window.innerWidth <= SMALL_SCREEN_BREAKPOINT,
      });
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
};
