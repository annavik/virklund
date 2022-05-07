import styles from "./TextInput.module.scss";

export const TextInput = ({
  label,
  value,
  onChange,
}: {
  label?: string;
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <div>
      {label && <span className={styles.Label}>{label}</span>}
      <input
        className={styles.TextInput}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
