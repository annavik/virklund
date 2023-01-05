import { ArrowButton } from "../ArrowButton/ArrowButton";
import styles from "./SectionTitle.module.scss";

export const SectionTitle = ({
  title,
  rightAccessory,
}: {
  title: string;
  rightAccessory?: { label: string; onClick: () => void };
}) => {
  return (
    <div className={styles.Content}>
      <h1 className={styles.Title}>{title}</h1>
      {rightAccessory && (
        <ArrowButton
          label={rightAccessory.label}
          onClick={rightAccessory.onClick}
        />
      )}
    </div>
  );
};
