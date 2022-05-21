import classNames from "classnames";
import React from "react";
import styles from "./Bubble.module.scss";

const positionClasses = {
  top: styles.Top,
  bottom: styles.Bottom,
  left: styles.Left,
  right: styles.Right,
};

const themeClasses = {
  ["light-blue"]: styles.LightBlue,
  ["light-green"]: styles.LightGreen,
  white: styles.White,
};

export const Bubble = ({
  position = "top",
  theme = "light-blue",
  style,
  children,
}: {
  position?: "top" | "bottom" | "left" | "right";
  theme?: "light-blue" | "light-green" | "white";
  style?: React.CSSProperties;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={classNames(styles.Bubble, themeClasses[theme])}
      style={style}
    >
      <div>{children}</div>
      <div
        className={classNames(
          styles.Arrow,
          positionClasses[position],
          themeClasses[theme]
        )}
      />
    </div>
  );
};
