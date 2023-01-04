import { useEffect, useRef, useState } from "react";
import { Bubble } from "../../components/Bubble/Bubble";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { InteractiveList } from "../../components/List/List";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Spacer } from "../../components/Spacer/Spacer";
import { VideoPlayer } from "../../components/VideoPlayer/VideoPlayer";
import { Virklund } from "../../components/Virklund/Virklund";
import { useWindowSize } from "../../hooks/useWindowSize";
import { lessons } from "./lessons";
import styles from "./LessonsPage.module.scss";
import { Lesson } from "./types";

export const LessonsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();
  const [videoWidth, setVideoWidth] = useState<number>();
  const [activeLesson, setActiveLesson] = useState(lessons[0]);

  const lessonListItems = lessons.map((l) => ({
    id: l.id,
    content: l.title,
    active: l.id === activeLesson.id,
  }));

  useEffect(() => {
    const containerWidth = containerRef.current?.getBoundingClientRect().width;
    if (containerWidth) {
      setVideoWidth(containerWidth);
    }
  }, [windowSize]);

  return (
    <div ref={containerRef} className={styles.Container}>
      <Spacer size={80} smallScreenSize={0} />
      <div className={styles.Intro}>
        <div className={styles.BubbleContainer}>
          <Bubble
            position={windowSize.isSmallScreen ? "top" : "left"}
            style={{ textAlign: "center" }}
          >
            <h3>Välkommen till Virkskolan! 💡</h3>
            <Spacer size={10} />
            <p>
              Virkskolan är en serie korta videor där fokus ligger på
              grundläggande tekniker och tips och trix.
            </p>
          </Bubble>
        </div>
        <Spacer size={60} smallScreenSize={30} />
        <Virklund size={windowSize.isSmallScreen ? 80 : 120} />
      </div>
      <Spacer size={80} smallScreenSize={30} />
      <div className={styles.Content}>
        <VideoPlayer
          title={activeLesson.title}
          src={activeLesson.src}
          width={windowSize.isSmallScreen ? videoWidth : 560}
        />
        <Spacer size={60} smallScreenSize={20} />
        {windowSize.isSmallScreen ? (
          <LessonsDropdown
            activeLesson={activeLesson}
            setActiveLesson={setActiveLesson}
          />
        ) : (
          <div>
            <SectionTitle title="Avsnitt" />
            <Spacer size={15} />
            <InteractiveList
              items={lessonListItems}
              onItemClick={(id) => {
                const lesson = lessons.find((l) => l.id === id);
                if (lesson) {
                  setActiveLesson(lesson);
                }
              }}
              style={{ padding: 0 }}
            />
          </div>
        )}
      </div>
      <Spacer size={80} smallScreenSize={0} />
    </div>
  );
};

const LessonsDropdown = ({
  activeLesson,
  setActiveLesson,
}: {
  activeLesson: Lesson;
  setActiveLesson: (lesson: Lesson) => void;
}) => {
  const items = lessons.map((lesson) => ({
    id: lesson.id,
    label: lesson.title,
  }));

  return (
    <Dropdown
      label="Välj avsnitt"
      items={items}
      selected={activeLesson.id}
      style={{ width: "100%" }}
      onSelect={(id) => {
        const lesson = lessons.find((lesson) => lesson.id === id);
        if (lesson) {
          setActiveLesson(lesson);
        }
      }}
    />
  );
};
