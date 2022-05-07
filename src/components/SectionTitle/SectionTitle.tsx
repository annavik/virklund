import { Spacer } from "../Spacer/Spacer";
import styles from "./SectionTitle.module.scss";

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <>
      <h1 className={styles.Title}>{title}</h1>
      <Spacer size={4} />
      <div className={styles.Line} />
    </>
  );
};
