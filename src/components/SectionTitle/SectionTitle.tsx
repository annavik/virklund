import { ArrowButton } from "../ArrowButton/ArrowButton";
import { Spacer } from "../Spacer/Spacer";
import styles from "./SectionTitle.module.scss";

export const SectionTitle = ({
  title,
  subTitle,
  rightAccessory,
}: {
  title: string;
  subTitle?: string;
  rightAccessory?: { label: string; onClick: () => void };
}) => {
  return (
    <>
      <div className={styles.Content}>
        <div>
          <h1 className={styles.Title}>{title}</h1>
          {subTitle && <span className={styles.SubTitle}>{subTitle}</span>}
        </div>
        {rightAccessory && (
          <ArrowButton
            label={rightAccessory.label}
            onClick={rightAccessory.onClick}
          />
        )}
      </div>
      <Spacer size={4} />
      <div className={styles.Line} />
    </>
  );
};
