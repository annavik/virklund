import virklund from "./virklund.jpg";
import styles from "./Virklund.module.scss";

export const Virklund = ({ size }: { size: number }) => {
  return (
    <img className={styles.Virklund} src={virklund} height={size} alt="" />
  );
};
