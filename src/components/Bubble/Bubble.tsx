import classNames from "classnames";
import React from "react";
import styles from "./Bubble.module.scss";

export const Bubble = ({
  position = "top",
  style,
  children,
}: {
  position?: "top" | "bottom" | "left" | "right";
  style?: React.CSSProperties;
  children: React.ReactNode;
}) => {
  return (
    <div className={styles.Bubble} style={style}>
      <div>{children}</div>
      <div
        className={classNames(styles.Arrow, {
          [styles.Top]: position === "top",
          [styles.Bottom]: position === "bottom",
          [styles.Left]: position === "left",
          [styles.Right]: position === "right",
        })}
      />
    </div>
  );
};
