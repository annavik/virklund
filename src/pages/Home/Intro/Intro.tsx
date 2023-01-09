import { useNavigate } from "react-router";
import { Button } from "../../../components/Button/Button";
import { Spacer } from "../../../components/Spacer/Spacer";
import styles from "./Intro.module.scss";
import room from "./room.png";

export const Intro = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.Intro}>
        <div className={styles.Content}>
          <h1 className={styles.Title}>Välkommen in!</h1>
          <p className={styles.Text}>
            Vad kul att du har hittat hit! Jag heter Anna och är en 32-årig tjej
            från Umeå som är lite virktokig. Inte nog med det, jag vill även få
            andra att virka och det var därför jag började spela in
            instruktionsvideor för nybörjare för några år sen. På den här sidan
            har jag samlat mina mönster och videor, hoppas du hittar något du
            gillar och kanske vågar ta steget att prova virkning du med, det
            skulle göra mig så glad!
          </p>
          <Spacer size={30} />
          <Button label="Hitta mönster" onClick={() => navigate("/patterns")} />
        </div>
        <Spacer size={30} smallScreenSize={60} />
        <img className={styles.Image} src={room} alt="" />
      </div>
    </>
  );
};
