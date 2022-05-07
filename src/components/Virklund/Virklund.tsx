import styles from "./Virklund.module.scss";
import virklund from "./virklund.jpg";

export const Virklund = ({ size }: { size: number }) => {
  return <img src={virklund} className={styles.Virklund} height={size} />;
};
