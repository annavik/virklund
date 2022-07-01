import classNames from "classnames";
import styles from "./Button.module.scss";

export const Button = ({
  label,
  theme = "primary",
  onClick,
}: {
  label: string;
  theme?: "primary" | "secondary";
  onClick: () => void;
}) => {
  return (
    <button
      className={classNames(styles.Button, {
        [styles.Primary]: theme === "primary",
        [styles.Secondary]: theme === "secondary",
      })}
      onClick={onClick}
    >
      <span>{label}</span>
    </button>
  );
};
