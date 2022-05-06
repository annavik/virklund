import styles from "./Button.module.scss";

export const Button = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <div role="button" className={styles.Button} onClick={onClick}>
      <span>{label}</span>
    </div>
  );
};
