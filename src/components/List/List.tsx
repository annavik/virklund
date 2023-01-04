import classNames from "classnames";
import React from "react";
import styles from "./List.module.scss";
import stitchMarker from "./stitch-marker.png";

const Marker = () => (
  <img className={styles.Marker} src={stitchMarker} alt="marker" />
);

export const List = ({
  items,
  style,
}: {
  items: {
    id: string;
    content: React.ReactNode;
  }[];
  style?: React.CSSProperties;
}) => (
  <ul className={styles.List} style={style}>
    {items.map((item) => (
      <li key={item.id} className={styles.ListItem}>
        <Marker />
        {item.content}
      </li>
    ))}
  </ul>
);

export const InteractiveList = ({
  items,
  onItemClick,
  style,
}: {
  items: {
    id: string;
    content: React.ReactNode;
    active?: boolean;
  }[];
  onItemClick: (id: string) => void;
  style?: React.CSSProperties;
}) => (
  <ul className={styles.List} style={style}>
    {items.map((item) => (
      <li
        key={item.id}
        role="button"
        tabIndex={0}
        className={classNames(styles.ListItem, styles.Interactive, {
          [styles.Active]: item.active,
        })}
        onClick={() => onItemClick(item.id)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onItemClick(item.id);
          }
        }}
      >
        {item.active && <Marker />}
        {item.content}
      </li>
    ))}
  </ul>
);
