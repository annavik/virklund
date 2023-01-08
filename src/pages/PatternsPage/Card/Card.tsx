import { truncate } from "lodash";
import { Spacer } from "../../../components/Spacer/Spacer";
import {
  getPatternDateString,
  patternTagToString,
} from "../../../patterns/patterns";
import { Pattern } from "../../../patterns/types";
import styles from "./Card.module.scss";

const DESC_MAX_LENGTH = 150;

export const Card = ({ pattern }: { pattern: Pattern }) => {
  const date = getPatternDateString(pattern);
  const description =
    pattern.description.length > DESC_MAX_LENGTH
      ? truncate(pattern.description, {
          length: DESC_MAX_LENGTH,
          separator: /,? +/,
        })
      : pattern.description;

  return (
    <div className={styles.Card}>
      <img
        className={styles.Image}
        src={pattern.image.src}
        style={{ objectPosition: pattern.image.objectPosition }}
        alt=""
      />
      <div className={styles.Content}>
        <span className={styles.Date}>{date}</span>
        <h2>{pattern.title}</h2>
        <Spacer size={5} />
        <p>{description}</p>
        <Spacer size={0} smallScreenSize={20} />
        <div className={styles.Tags}>
          {pattern.tags.map((tag) => (
            <div key={tag} className={styles.Tag}>
              {patternTagToString(tag)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
