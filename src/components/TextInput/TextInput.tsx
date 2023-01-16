import styles from "./TextInput.module.scss";

export const TextInput = ({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} className={styles.Label}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={styles.TextInput}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
