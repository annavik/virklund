import { Spacer } from "../Spacer/Spacer";
import arrow from "./arrow-right-white.png";
import styles from "./SectionTitle.module.scss";

export const SectionTitle = ({
  title,
  action,
}: {
  title: string;
  action?: { label: string; onClick: () => void };
}) => {
  return (
    <>
      <div className={styles.Content}>
        <h1 className={styles.Title}>{title}</h1>
        {action && (
          <div role="button" className={styles.Action} onClick={action.onClick}>
            <span>{action.label}</span>
            <Spacer size={10} />
            <div className={styles.ArrowContainer}>
              <img src={arrow} width={16} height={16} />
            </div>
          </div>
        )}
      </div>
      <Spacer size={4} />
      <div className={styles.Line} />
    </>
  );
};
