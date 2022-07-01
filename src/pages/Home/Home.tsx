import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Spacer } from "../../components/Spacer/Spacer";
import { patterns, sortPatternsByDate } from "../../patterns/patterns";
import { Pattern } from "../../patterns/types";
import book from "./book.png";
import { Card } from "./Card/Card";
import styles from "./Home.module.scss";
import { Intro } from "./Intro/Intro";
import light from "./light.png";
import { Teaser } from "./Teaser/Teaser";

export const Home = () => {
  const navigate = useNavigate();
  const [latestPatterns, setLatestPatterns] = useState<Pattern[]>([]);

  useEffect(() => {
    setLatestPatterns(sortPatternsByDate(patterns).slice(0, 3));
  }, []);

  return (
    <div className={styles.Container}>
      <Spacer size={80} smallScreenSize={20} />
      <Intro />
      <Spacer size={100} smallScreenSize={60} />
      <Teaser
        title="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        image={{ src: book, alignment: "left" }}
        button={{ label: "Lorem ipsum", onClick: () => {} }}
      />
      <Spacer size={50} smallScreenSize={20} />
      <Teaser
        title="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        image={{ src: light, alignment: "right" }}
        button={{ label: "Lorem ipsum", onClick: () => {} }}
      />
      <Spacer size={100} smallScreenSize={60} />
      <SectionTitle
        title="Senaste mönster"
        rightAccessory={{
          label: "Visa alla",
          onClick: () => navigate("/patterns"),
        }}
      />
      <Spacer size={30} smallScreenSize={20} />
      <div className={styles.LatestPatterns}>
        {latestPatterns.map((pattern) => (
          <Link to={`/patterns/${pattern.id}`} key={pattern.id}>
            <Card pattern={pattern} />
          </Link>
        ))}
      </div>
      <Spacer size={80} smallScreenSize={0} />
    </div>
  );
};
