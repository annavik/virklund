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
        title="Tips och trix i Virkskolan"
        text="Virkskolan är en serie korta videor där jag visar lite grunder och kommer med tips. Tanken är att klippen ska kunna användas om man snabbt vill ta reda på hur man gör något specifikt under tiden man virkar."
        image={{ src: book, alignment: "left" }}
        button={{
          label: "Till Virkskolan",
          onClick: () => navigate("/lessons"),
        }}
      />
      <Spacer size={50} smallScreenSize={20} />
      <Teaser
        title="En mysig virkstund"
        text="Gör virkstunden lite extra mysig genom ett levande ljus, en kanna te och kanske en trevlig ljudbok? Jag har även börjat på en liten spellista för virkning, testa den gärna!"
        image={{ src: light, alignment: "right" }}
        button={{
          label: "Spellista för virkning",
          onClick: () =>
            window.open(
              "https://open.spotify.com/playlist/5zd4IAw6LJKSZw6tEOycgf?si=dfb1ad196b9e4125"
            ),
        }}
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
          <Link
            to={`/patterns/${pattern.id}`}
            key={pattern.id}
            className={styles.CardLink}
          >
            <Card pattern={pattern} />
          </Link>
        ))}
      </div>
      <Spacer size={80} smallScreenSize={0} />
    </div>
  );
};
