import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Spacer } from "../../components/Spacer/Spacer";
import { patterns, sortPatternsByDate } from "../../patterns/patterns";
import { Pattern } from "../../patterns/types";
import { Card } from "./Card/Card";
import styles from "./Home.module.scss";
import { Intro } from "./Intro/Intro";

export const Home = () => {
  const navigate = useNavigate();
  const [latestPatterns, setLatestPatterns] = useState<Pattern[]>([]);

  useEffect(() => {
    setLatestPatterns(sortPatternsByDate(patterns).slice(0, 3));
  }, []);

  return (
    <div className={styles.Container}>
      <Spacer size={80} />
      <Intro />
      <Spacer size={100} />
      <SectionTitle
        title="Senaste mönster"
        rightAccessory={{
          label: "Visa alla",
          onClick: () => navigate("/patterns"),
        }}
      />
      <Spacer size={30} />
      <div className={styles.LatestPatterns}>
        {latestPatterns.map((pattern) => (
          <Link to={`/patterns/${pattern.id}`} key={pattern.id}>
            <Card pattern={pattern} />
          </Link>
        ))}
      </div>
      <Spacer size={80} />
    </div>
  );
};
