import classNames from "classnames";
import styles from "./Spacer.module.scss";

export const Spacer = ({
  size,
  smallScreenSize,
}: {
  size: number;
  smallScreenSize?: number;
}) => {
  return (
    <>
      <div
        className={classNames(styles.Spacer, styles.DefaultScreen)}
        style={{ width: `${size}px`, height: `${size}px` }}
      ></div>
      <div
        className={classNames(styles.Spacer, styles.SmallScreen)}
        style={{
          width: `${smallScreenSize ?? size}px`,
          height: `${smallScreenSize ?? size}px`,
        }}
      ></div>
    </>
  );
};
