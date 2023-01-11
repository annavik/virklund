import hook from "./hook.png";
import styles from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={styles.Loader}>
      <img
        className={styles.Image}
        src={hook}
        height={120}
        width={60}
        alt="Laddar..."
      ></img>
    </div>
  );
};
