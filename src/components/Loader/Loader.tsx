import hook from "./hook.png";
import styles from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={styles.Loader}>
      <img
        className={styles.Image}
        src={hook}
        height={100}
        width={100}
        alt="Laddar..."
      ></img>
    </div>
  );
};
