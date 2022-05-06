import { Button } from "../Button/Button";
import { Spacer } from "../Spacer/Spacer";
import crochetHook from "./crochet-hook.png";
import styles from "./Intro.module.scss";

export const Intro = () => {
  return (
    <div className={styles.Intro}>
      <Spacer size={80} />
      <div className={styles.Content}>
        <h1 className={styles.Title}>Lorem ipsum!</h1>
        <p className={styles.Text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <img className={styles.Image} src={crochetHook} />
      </div>
      <Spacer size={50} />
      <Button label="Lorem ipsum" onClick={() => {}} />
    </div>
  );
};
