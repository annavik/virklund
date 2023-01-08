import React, { useEffect, useState } from "react";
import { ArrowButton } from "../../../components/ArrowButton/ArrowButton";
import { Bubble } from "../../../components/Bubble/Bubble";
import { MarkdownContent } from "../../../components/MarkdownContent/MarkdownContent";
import { Spacer } from "../../../components/Spacer/Spacer";
import { useWindowSize } from "../../../hooks/useWindowSize";
import {
  getPatternDateString,
  patternTagToLinkString,
} from "../../../patterns/patterns";
import { Pattern } from "../../../patterns/types";
import styles from "./Content.module.scss";

export const Content = ({ pattern }: { pattern: Pattern }) => {
  const { isSmallScreen } = useWindowSize();
  const date = getPatternDateString(pattern);
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
      <h1 className={styles.Title}>{pattern.title}</h1>
      <p className={styles.SubTitle}>{date}</p>
      <Spacer size={40} />
      <div>
        <Bubble
          position={isSmallScreen ? "top" : "right"}
          theme={isSmallScreen ? "white" : "light-blue"}
          style={
            isSmallScreen
              ? { margin: "0 0 30px 0", padding: "30px" }
              : {
                  zIndex: 1,
                  float: "right",
                  maxWidth: "360px",
                  margin: "0 0 30px 30px",
                  padding: "30px",
                }
          }
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
          {pattern.links.length ? (
            <>
              <Spacer size={30} />
              {pattern.links.map((link, index) => (
                <React.Fragment key={link.type}>
                  <a href={link.src} download>
                    <ArrowButton label={patternTagToLinkString(link.type)} />
                  </a>
                  {index < pattern.links.length - 1 && <Spacer size={10} />}
                </React.Fragment>
              ))}
            </>
          ) : null}
        </Bubble>
        <MarkdownContent
          style={{ maxWidth: "480px" }}
          content={pattern.content ? content : pattern.description}
        />
      </div>
    </>
  );
};
