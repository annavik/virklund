import React from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowButton } from "../../components/ArrowButton/ArrowButton";
import { Bubble } from "../../components/Bubble/Bubble";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Spacer } from "../../components/Spacer/Spacer";
import { VideoPlayer } from "../../components/VideoPlayer/VideoPlayer";
import { patterns, patternTagToLinkString } from "../../patterns/patterns";
import styles from "./PatternPage.module.scss";

const PatternsButton = () => {
  const navigate = useNavigate();

  return (
    <ArrowButton
      label="Alla mönster"
      onClick={() => navigate("/patterns")}
      plain
      reverse
    />
  );
};

export const PatternPage = () => {
  let { id } = useParams();

  const pattern = patterns.find((p) => p.id === id);

  if (!pattern) {
    return <></>;
  }

  return (
    <div className={styles.Container}>
      <Spacer size={40} />
      <PatternsButton />
      <Spacer size={40} />
      <div className={styles.Card}>
        {pattern.video ? (
          <VideoPlayer title={pattern.title} src={pattern.video} width={720} />
        ) : (
          <img
            className={styles.Image}
            src={pattern.image.src}
            style={{ objectPosition: pattern.image.objectPosition }}
            alt=""
          />
        )}
        <div className={styles.Content}>
          <SectionTitle
            title={pattern.title}
            subTitle={`Publicerad ${pattern.date.toISOString().split("T")[0]}`}
          />
          <Spacer size={20} />
          <div className={styles.Row}>
            <div className={styles.Column}>
              <p className={styles.Description}>{pattern.description}</p>
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
              <Bubble position="right" style={{ padding: "30px" }}>
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
        </div>
      </div>
      <Spacer size={40} />
      <PatternsButton />
      <Spacer size={40} />
    </div>
  );
};
