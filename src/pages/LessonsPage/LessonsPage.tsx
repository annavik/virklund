import classNames from "classnames";
import { useState } from "react";
import { Bubble } from "../../components/Bubble/Bubble";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Spacer } from "../../components/Spacer/Spacer";
import { VideoPlayer } from "../../components/VideoPlayer/VideoPlayer";
import { Virklund } from "../../components/Virklund/Virklund";
import { lessons } from "./lessons";
import styles from "./LessonsPage.module.scss";
import stitchMarker from "./stitch-marker.png";

export const LessonsPage = () => {
  const [activeLesson, setActiveLesson] = useState(lessons[0]);

  return (
    <div className={styles.Container}>
      <Spacer size={80} />
      <div className={styles.Intro}>
        <div className={styles.BubbleContainer}>
          <Bubble position="left" style={{ textAlign: "center" }}>
            <h3>Välkommen till Virkskolan! 💡</h3>
            <Spacer size={10} />
            <p>
              Virkskolan är en serie korta videor där fokus ligger på
              grundläggande tekniker och tips och trix.
            </p>
          </Bubble>
        </div>
        <Spacer size={60} />
        <Virklund size={120} />
      </div>
      <Spacer size={80} />
      <div className={styles.Content}>
        <VideoPlayer title={activeLesson.title} src={activeLesson.src} />
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
                      alt="marker"
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
