import classNames from "classnames";
import { Button } from "../../../components/Button/Button";
import { Spacer } from "../../../components/Spacer/Spacer";
import styles from "./Teaser.module.scss";

export const Teaser = ({
  title,
  text,
  image,

  button,
}: {
  title: string;
  text: string;
  image: { src: string; alignment: "left" | "right" };
  button: { label: string; onClick: () => void };
}) => {
  return (
    <div
      className={classNames(styles.Teaser, {
        [styles.ImageFirst]: image.alignment === "left",
        [styles.ContentFirst]: image.alignment === "right",
      })}
    >
      <img className={styles.Image} src={image.src} alt="" />
      <div className={styles.Content}>
        <h2 className={styles.Title}>{title}</h2>
        <Spacer size={20} />
        <p className={styles.Text}>{text}</p>
        <Spacer size={20} smallScreenSize={40} />
        <Button
          label={button.label}
          theme="secondary"
          onClick={button.onClick}
        />
      </div>
    </div>
  );
};
