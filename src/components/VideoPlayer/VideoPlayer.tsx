import { useEffect, useRef, useState } from "react";
import { Loader } from "../Loader/Loader";
import styles from "./VideoPlayer.module.scss";

const RATIO = 16 / 9;

export const VideoPlayer = ({
  title,
  src,
  width = 560,
}: {
  title: string;
  src: string;
  width?: number;
}) => {
  const prevSrc = useRef(src);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (prevSrc.current !== src) {
      setIsLoading(true);
    }
    prevSrc.current = src;
  }, [src]);

  return (
    <div
      className={styles.Container}
      style={{ width: `${width}px`, height: `${width / RATIO}px` }}
    >
      {isLoading && (
        <div className={styles.Loader}>
          <Loader />
        </div>
      )}
      <iframe
        style={{ visibility: isLoading ? "hidden" : "visible" }}
        width={width}
        height={width / RATIO}
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => {
          setIsLoading(false);
        }}
      ></iframe>
    </div>
  );
};
