import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { Spacer } from "../../components/Spacer/Spacer";
import { VideoPlayer } from "../../components/VideoPlayer/VideoPlayer";
import { useWindowSize } from "../../hooks/useWindowSize";
import { patterns } from "../../patterns/patterns";
import { Content } from "./Content/Content";
import styles from "./PatternPage.module.scss";
import { BackButton, PatternsButton } from "./PatternsButton/PatternButton";

export const PatternPage = () => {
  const params = useParams();
  const containerRef = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();
  const [videoWidth, setVideoWidth] = useState<number>();
  const pattern = patterns.find((p) => p.id === params.id);

  useEffect(() => {
    const containerWidth = containerRef.current?.getBoundingClientRect().width;
    if (containerWidth) {
      setVideoWidth(containerWidth);
    }
  }, [windowSize]);

  if (!pattern) {
    return <></>;
  }

  return (
    <div ref={containerRef} className={styles.Container}>
      <div className={styles.TopContent}>
        <Spacer size={40} />
        <BackButton />
        <Spacer size={40} />
      </div>
      <div className={styles.Card}>
        {pattern.video ? (
          <VideoPlayer
            title={pattern.title}
            src={pattern.video}
            width={videoWidth}
          />
        ) : (
          <img
            className={styles.Image}
            src={pattern.image.src}
            style={{ objectPosition: pattern.image.objectPosition }}
            alt=""
          />
        )}
        <div className={styles.Content}>
          <Content pattern={pattern} />
        </div>
      </div>
      <div className={styles.BottomContent}>
        <Spacer size={40} smallScreenSize={0} />
        <PatternsButton />
        <Spacer size={40} />
      </div>
    </div>
  );
};
