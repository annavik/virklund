import { useNavigate } from "react-router";
import { Button } from "../../../components/Button/Button";
import { Spacer } from "../../../components/Spacer/Spacer";
import crochetHook from "./crochet-hook.png";
import styles from "./Intro.module.scss";

export const Intro = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.Intro}>
      <div className={styles.Content}>
        <h1 className={styles.Title}>Lorem ipsum!</h1>
        <p className={styles.Text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <img className={styles.Image} src={crochetHook} alt="" />
      </div>
      <Spacer size={50} />
      <Button label="Lorem ipsum" onClick={() => navigate("/patterns")} />
    </div>
  );
};