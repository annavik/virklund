import { Spacer } from "../Spacer/Spacer";
import styles from "./Footer.module.scss";
import instagram from "./instagram.png";
import yarn from "./yarn.png";
import youtube from "./youtube.png";

export const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Content}>
        <p>Kod och design av Anna Viklund 2022</p>
        <Spacer size={15} />
        <div className={styles.Social}>
          <a
            href="https://www.instagram.com/annavirklund/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} height={20} alt="instagram" />
          </a>
          <Spacer size={20} />
          <a
            href="https://www.youtube.com/c/AnnaVirklund/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={youtube} height={20} alt="youtube" />
          </a>
        </div>
        <img className={styles.Yarn} src={yarn} height={40} alt=""></img>
      </div>
    </div>
  );
};
