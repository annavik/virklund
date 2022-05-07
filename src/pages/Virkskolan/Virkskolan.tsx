import classNames from "classnames";
import { useState } from "react";
import { Bubble } from "../../components/Bubble/Bubble";
import { Spacer } from "../../components/Spacer/Spacer";
import { Virklund } from "../../components/Virklund/Virklund";
import { lessons } from "./lessons";
import styles from "./Virkskolan.module.scss";
import stitchMarker from "./stitch-marker.png";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";

export const Virkskolan = () => {
  const [activeLesson, setActiveLesson] = useState(lessons[0]);

  return (
    <div className={styles.Container}>
      <Spacer size={80} />
      <div className={styles.Intro}>
        <div className={styles.BubbleContainer}>
          <Bubble
            title="Välkommen till Virkskolan!"
            text="Virkskolan är en serie korta videor där jag visar lite grunder och kommer med tips."
            position="left"
          />
        </div>
        <Spacer size={60} />
        <Virklund size={120} />
      </div>
      <Spacer size={80} />
      <div className={styles.Content}>
        <iframe
          width="560"
          height="315"
          src={activeLesson.src}
          title={activeLesson.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <Spacer size={60} />
        <div className={styles.List}>
          <SectionTitle title="Avsnitt" />
          <Spacer size={15} />
          <ul>
            {lessons.map((l) => {
              const isActive = l.id === activeLesson.id;

              return (
                <li
                  key={l.id}
                  className={classNames({
                    [styles.Active]: isActive,
                  })}
                  onClick={() => setActiveLesson(l)}
                >
                  {isActive && (
                    <img
                      className={styles.Marker}
                      src={stitchMarker}
                      height={20}
                    />
                  )}
                  {l.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Spacer size={80} />
    </div>
  );
};
