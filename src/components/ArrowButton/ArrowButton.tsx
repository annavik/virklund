import { Spacer } from "../Spacer/Spacer";
import styles from "./ArrowButton.module.scss";
import arrowWhite from "./arrow-right-white.png";
import arrowBlack from "./arrow-right-black.png";
import classNames from "classnames";

export const ArrowButton = ({
  label,
  onClick,
  reverse,
  plain,
}: {
  label: string;
  onClick: () => void;
  reverse?: boolean;
  plain?: boolean;
}) => {
  return (
    <div
      role="button"
      className={classNames(styles.ArrowButton, {
        [styles.Reverse]: reverse,
        [styles.Plain]: plain,
      })}
      onClick={onClick}
    >
      <span>{label}</span>
      {plain ? (
        <div className={styles.ArrowContainer}>
          <img src={arrowBlack} width={16} height={16} />
        </div>
      ) : (
        <>
          <Spacer size={10} />
          <div className={styles.ArrowContainer}>
            <img src={plain ? arrowBlack : arrowWhite} width={16} height={16} />
          </div>
        </>
      )}
    </div>
  );
};
