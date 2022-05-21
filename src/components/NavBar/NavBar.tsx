import classNames from "classnames";
import { uniqueId } from "lodash";
import React, { useEffect, useState } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { Spacer } from "../Spacer/Spacer";
import { Virklund } from "../Virklund/Virklund";
import styles from "./NavBar.module.scss";

const NAV_ITEMS = [
  { id: uniqueId("navItem"), label: "Hem", path: "/" },
  {
    id: uniqueId("navItem"),
    label: "Mönster",
    path: "/patterns",
    matchPath: "/patterns/*",
  },
  { id: uniqueId("navItem"), label: "Virkskolan", path: "/lessons" },
  { id: uniqueId("navItem"), label: "Kontakt", path: "/contact" },
];

export const NavBar = () => {
  const location = useLocation();
  const [markerStyle, setMarkerStyle] =
    useState<React.CSSProperties | undefined>(undefined);

  const navItems = NAV_ITEMS.map((navItem) => ({
    id: navItem.id,
    label: navItem.label,
    path: navItem.path,
    active: !!matchPath(navItem.matchPath ?? navItem.path, location.pathname),
  }));

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
    <div className={styles.NavBar}>
      <Link to="/">
        <div className={styles.Logo}>
          <Virklund size={30} />
          <Spacer size={10} />
          <span>Anna Virklund</span>
        </div>
      </Link>
      <nav className={styles.NavItems}>
        {navItems.map((navItem) => (
          <NavItem key={navItem.id} navItem={navItem} />
        ))}
        <div className={styles.Marker} style={markerStyle}></div>
      </nav>
    </div>
  );
};

const NavItem = ({
  navItem,
}: {
  navItem: { id: string; label: string; path: string; active: boolean };
}) => {
  return (
    <Link
      id={navItem.id}
      to={navItem.path}
      className={classNames(styles.NavItem, {
        [styles.Active]: navItem.active,
      })}
    >
      <span>{navItem.label}</span>
    </Link>
  );
};
