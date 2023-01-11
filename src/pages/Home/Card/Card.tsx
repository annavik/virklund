import { Spacer } from "../../../components/Spacer/Spacer";
import { getPatternDateString } from "../../../patterns/patterns";
import { Pattern } from "../../../patterns/types";
import styles from "./Card.module.scss";

export const Card = ({ pattern }: { pattern: Pattern }) => {
  const src = pattern.image.thumbnail ?? pattern.image.src;
  const date = getPatternDateString(pattern);

  return (
    <div className={styles.Card}>
      <img className={styles.Image} src={src} alt="" />
      <div className={styles.Content}>
        <span className={styles.Date}>{date}</span>
        <Spacer size={5} />
        <h2>{pattern.title}</h2>
      </div>
    </div>
  );
};
