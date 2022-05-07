import { useEffect, useState } from "react";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Spacer } from "../../components/Spacer/Spacer";
import { Card } from "./Card/Card";
import { patterns } from "./data/patterns";
import { Pattern } from "./data/types";
import styles from "./Patterns.module.scss";

export const Patterns = () => {
  const [patternList, setPatternList] = useState<Pattern[]>([]);

  useEffect(() => {
    setPatternList(patterns);
  }, []);

  return (
    <div className={styles.Container}>
      <Spacer size={80} />
      <SectionTitle title="Mönster" />
      <Spacer size={30} />
      {/* TODO */}
      <Spacer size={40} />
      {patternList.map((pattern) => (
        <>
          <Card pattern={pattern} />
          <Spacer size={30} />
        </>
      ))}
    </div>
  );
};
