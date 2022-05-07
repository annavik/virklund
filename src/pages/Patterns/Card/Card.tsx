import { Spacer } from "../../../components/Spacer/Spacer";
import { tagToString } from "../data/patterns";
import { Pattern } from "../data/types";
import styles from "./Card.module.scss";

export const Card = ({ pattern }: { pattern: Pattern }) => {
  return (
    <div className={styles.Card}>
      <img
        className={styles.Image}
        src={pattern.image.src}
        style={{ objectPosition: pattern.image.objectPosition }}
      />
      <div className={styles.Content}>
        <span className={styles.Date}>
          {pattern.date.toISOString().split("T")[0]}
        </span>
        <h2>{pattern.title}</h2>
        <Spacer size={5} />
        <p>{pattern.description}</p>
        <div className={styles.Tags}>
          {pattern.tags.map((tag) => (
            <div key={tag} className={styles.Tag}>
              {tagToString(tag)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};