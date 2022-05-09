import classNames from "classnames";
import React from "react";
import styles from "./Bubble.module.scss";

export const Bubble = ({
  html,
  position = "top",
  style,
}: {
  html: string;
  position?: "top" | "bottom" | "left" | "right";
  style?: React.CSSProperties;
}) => {
  return (
    <div className={styles.Bubble} style={style}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
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
