import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { ArrowButton } from "../../../components/ArrowButton/ArrowButton";
import { Bubble } from "../../../components/Bubble/Bubble";
import { MarkdownContent } from "../../../components/MarkdownContent/MarkdownContent";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Spacer } from "../../../components/Spacer/Spacer";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { patternTagToLinkString } from "../../../patterns/patterns";
import { Pattern } from "../../../patterns/types";
import styles from "./Content.module.scss";

export const Content = ({ pattern }: { pattern: Pattern }) => {
  const { isSmallScreen } = useWindowSize();
  const [content, setContent] = useState("");

  useEffect(() => {
    if (pattern.content) {
      fetch(pattern.content)
        .then((response) => response.text())
        .then((result) => setContent(result));
    }
  }, []);

  return (
    <>
      <SectionTitle
        title={pattern.title}
        subTitle={`Publicerad ${pattern.date.toISOString().split("T")[0]}`}
      />
      <Spacer size={20} />
      <div className={styles.Columns}>
        <div className={classNames(styles.Column, styles.Content)}>
          <MarkdownContent content={content} />
          <Spacer size={20} />
          {pattern.links.map((link, index) => {
            return (
              <React.Fragment key={link.type}>
                <a href={link.src} download>
                  <ArrowButton label={patternTagToLinkString(link.type)} />
                </a>
                {index < pattern.links.length - 1 && <Spacer size={10} />}
              </React.Fragment>
            );
          })}
        </div>
        <Spacer size={40} />
        <div className={styles.Column}>
          <Bubble
            position={isSmallScreen ? "bottom" : "right"}
            theme={isSmallScreen ? "white" : "light-blue"}
            style={{ padding: "30px" }}
          >
            <h3>Mönsterinfo</h3>
            <Spacer size={10} />
            <p>
              <strong>Virknål: </strong>
              {pattern.info.hook}
            </p>
            <Spacer size={5} />
            <p>
              <strong>Garn: </strong>
              {pattern.info.yarn}
            </p>
            <Spacer size={5} />
            <p>
              <strong>Svårighetsgrad: </strong>
              {pattern.info.level}
            </p>
          </Bubble>
        </div>
      </div>
    </>
  );
};
