import classNames from "classnames";
import { Link, useMatch } from "react-router-dom";
import { Spacer } from "../Spacer/Spacer";
import { Virklund } from "../Virklund/Virklund";
import styles from "./NavBar.module.scss";

const navItems = [
  { label: "Hem", path: "/" },
  { label: "Mönster", path: "/patterns", matchPath: "/patterns/*" },
  { label: "Virkskolan", path: "/lessons" },
  { label: "Kontakt", path: "/contact" },
];

export const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <a href="/">
        <div className={styles.Logo}>
          <Virklund size={40} />
          <Spacer size={10} />
          <span>Anna Virklund</span>
        </div>
      </a>
      <nav className={styles.NavItems}>
        {navItems.map((navItem) => (
          <NavItem key={navItem.path} navItem={navItem} />
        ))}
      </nav>
    </div>
  );
};

const NavItem = ({
  navItem,
}: {
  navItem: { label: string; path: string; matchPath?: string };
}) => {
  const match = useMatch(navItem.matchPath ?? navItem.path);

  return (
    <Link to={navItem.path} className={styles.NavItem}>
      <span>{navItem.label}</span>
      <div
        className={classNames({
          [styles.NavItemMarker]: true,
          [styles.Active]: !!match,
        })}
      ></div>
    </Link>
  );
};
