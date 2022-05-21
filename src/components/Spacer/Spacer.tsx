import { useWindowSize } from "../../hooks/useWindowSize";
import styles from "./Spacer.module.scss";

export const Spacer = ({
  size,
  smallScreenSize,
}: {
  size: number;
  smallScreenSize?: number;
}) => {
  const { isSmallScreen } = useWindowSize();
  const _size = isSmallScreen ? smallScreenSize : size;

  return (
    <div
      className={styles.Spacer}
      style={{ width: `${_size}px`, height: `${_size}px` }}
    ></div>
  );
};
