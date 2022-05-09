import { Bubble } from "../../components/Bubble/Bubble";
import { Spacer } from "../../components/Spacer/Spacer";
import anna from "./anna.jpg";
import styles from "./Contact.module.scss";

export const Contact = () => {
  return (
    <div className={styles.Container}>
      <Spacer size={80} />
      <div className={styles.Content}>
        <img src={anna} width={300} height={300} className={styles.Image} />
        <Spacer size={60} />
        <br />
        <div className={styles.BubbleContainer}>
          <Bubble
            html={[
              "<h3>Kontakt</h3>",
              "<p>Har du feedback, funderingar eller vill du kanske bara prata lite om virkning? Skriv till mig på Instagram eller skicka ett mail - jag blir alltid jätteglad när ni hör av er!</p>",
              "<p>",
              `<span>Instagram 👉 <a href="https://www.instagram.com/annavirklund/" target="_blank">@annavirklund</a></span><br>`,
              `<span>YouTube 👉 <a href="https://www.youtube.com/c/AnnaVirklund/" target="_blank">@Anna Virklund</a></span>`,
              "</p>",
              `<p>💌 <a href="mailto:annamariaviklund@gmail.com">Skriv ett mail!</a> 💌</p>`,
            ].join("")}
            position="right"
            style={{ height: "300px" }}
          />
        </div>
      </div>
      <Spacer size={80} />
    </div>
  );
};
