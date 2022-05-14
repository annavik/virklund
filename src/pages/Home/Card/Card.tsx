import { Spacer } from "../../../components/Spacer/Spacer";
import { Pattern } from "../../../patterns/types";
import styles from "./Card.module.scss";

export const Card = ({ pattern }: { pattern: Pattern }) => {
  return (
    <div className={styles.Card}>
      <img className={styles.Image} src={pattern.image.src} alt="" />
      <div className={styles.Content}>
        <span className={styles.Date}>
          {pattern.date.toISOString().split("T")[0]}
        </span>
        <Spacer size={5} />
        <h2>{pattern.title}</h2>
      </div>
    </div>
  );
};
