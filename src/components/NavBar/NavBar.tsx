import { Link } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Spacer } from "../Spacer/Spacer";
import { Virklund } from "../Virklund/Virklund";
import { Menu } from "./Menu/Menu";
import styles from "./NavBar.module.scss";
import { SmallScreenMenu } from "./SmallScreenMenu/SmallScreenMenu";

export const NavBar = () => {
  const { isSmallScreen } = useWindowSize();

  return (
    <div className={styles.NavBar}>
      <Link to="/" className={styles.Logo}>
        <Virklund size={30} />
        <Spacer size={10} />
        <span>Anna Virklund</span>
      </Link>
      {isSmallScreen ? <SmallScreenMenu /> : <Menu />}
    </div>
  );
};
