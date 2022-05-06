import classNames from "classnames";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Spacer } from "../Spacer/Spacer";
import styles from "./NavBar.module.scss";
import virklund from "./virklund.jpg";

const navItems = [
  { label: "Hem", path: "/" },
  { label: "Mönster", path: "/monster" },
  { label: "Virkskolan", path: "/virkskolan" },
  { label: "Kontakt", path: "/kontakt" },
];

export const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <a href="/">
        <div className={styles.Logo}>
          <img src={virklund} height={40} />
          <Spacer size={10} />
          <span>Anna Virklund</span>
        </div>
      </a>
      <nav className={styles.NavItems}>
        {navItems.map((navItem) => (
          <NavItem navItem={navItem} />
        ))}
      </nav>
    </div>
  );
};

const NavItem = ({ navItem }: { navItem: { label: string; path: string } }) => {
  const resolvedPath = useResolvedPath(navItem.path);
  const match = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link key={navItem.path} to={navItem.path} className={styles.NavItem}>
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
