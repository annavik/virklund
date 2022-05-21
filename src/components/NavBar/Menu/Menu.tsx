import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavItems } from "../useNavItems";
import styles from "./Menu.module.scss";

export const Menu = () => {
  const navItems = useNavItems();
  const [markerStyle, setMarkerStyle] =
    useState<React.CSSProperties | undefined>(undefined);
  const activeNavItemId = navItems.find((navItem) => navItem.active)?.id;

  useEffect(() => {
    if (activeNavItemId) {
      const element = document.getElementById(activeNavItemId);
      if (element) {
        const offsetLeft = element.offsetLeft;
        const offsetWidth = element.offsetWidth;
        setMarkerStyle({ left: `${offsetLeft}px`, width: `${offsetWidth}px` });
        return;
      }
    }
    setMarkerStyle(undefined);
  }, [activeNavItemId]);

  return (
    <nav className={styles.Menu}>
      {navItems.map((navItem) => (
        <MenuItem key={navItem.id} navItem={navItem} />
      ))}
      <div className={styles.Marker} style={markerStyle}></div>
    </nav>
  );
};

const MenuItem = ({
  navItem,
}: {
  navItem: { id: string; label: string; path: string; active: boolean };
}) => {
  return (
    <Link
      id={navItem.id}
      to={navItem.path}
      className={classNames(styles.MenuItem, {
        [styles.Active]: navItem.active,
      })}
    >
      <span>{navItem.label}</span>
    </Link>
  );
};
