import { Bubble } from "../../components/Bubble/Bubble";
import { Spacer } from "../../components/Spacer/Spacer";
import { useWindowSize } from "../../hooks/useWindowSize";
import anna from "./anna.jpg";
import styles from "./ContactPage.module.scss";

export const ContactPage = () => {
  const { isSmallScreen } = useWindowSize();
  const imageSize = isSmallScreen ? 200 : 300;

  return (
    <div className={styles.Container}>
      <Spacer size={80} smallScreenSize={0} />
      <div className={styles.Content}>
        <img
          src={anna}
          width={imageSize}
          height={imageSize}
          className={styles.Image}
          alt="anna"
        />
        <Spacer size={60} smallScreenSize={30} />
        <br />
        <div className={styles.BubbleContainer}>
          <Bubble
            position={isSmallScreen ? "top" : "right"}
            style={{
              height: "300px",
              textAlign: isSmallScreen ? "center" : "left",
            }}
          >
            <h2>Kontakt</h2>
            <Spacer size={10} />
            <p>
              Har du feedback, funderingar eller vill du kanske bara prata lite
              om virkning? Skriv till mig på Instagram eller skicka ett mail -
              jag blir alltid jätteglad när ni hör av er!
            </p>
            <Spacer size={15} />
            <p>
              Instagram 👉{" "}
              <a
                href="https://www.instagram.com/annavirklund/"
                target="_blank"
                rel="noreferrer"
              >
                @annavirklund
              </a>
            </p>
            <p>
              YouTube 👉{" "}
              <a
                href="https://www.youtube.com/c/AnnaVirklund/"
                target="_blank"
                rel="noreferrer"
              >
                @Anna Virklund
              </a>
            </p>
            <Spacer size={15} />
            <p>
              💌 <a href="mailto:annamariaviklund@gmail.com">Skriv ett mail!</a>{" "}
              💌
            </p>
          </Bubble>
        </div>
      </div>
      <Spacer size={80} smallScreenSize={20} />
    </div>
  );
};
