import classNames from "classnames";
import { Spacer } from "../Spacer/Spacer";
import styles from "./Bubble.module.scss";

export const Bubble = ({
  title,
  text,
  position = "top",
}: {
  title: string;
  text: string;
  position?: "top" | "bottom" | "left" | "right";
}) => {
  return (
    <div className={styles.Bubble}>
      <h3>{title}</h3>
      <Spacer size={10} />
      <span>{text}</span>
      <div
        className={classNames(styles.Arrow, {
          [styles.Top]: position === "top",
          [styles.Bottom]: position === "bottom",
          [styles.Left]: position === "left",
          [styles.Right]: position === "right",
        })}
      />
    </div>
  );
};
