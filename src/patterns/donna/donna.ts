import { Pattern, Tag } from "../types";
import image from "./donna.jpg";

export const donna: Pattern = {
  id: "donna",
  title: "Sjal Donna",
  image: {
    src: image,
  },
  date: new Date("2017-10-02"),
  tags: [Tag.PDF, Tag.Print, Tag.Video],
  links: [
    { type: Tag.PDF, src: "" },
    { type: Tag.Print, src: "" },
  ],
  description:
    "I det här mönstret virkar vi en härlig sjal som är perfekt att värma sig i under hösten. Sjalen har jag döpt till Donna och för en komplett outfit rekommenderar jag såklart att man kombinerar med mössan Laura i en passande färg.",
  video: "https://www.youtube.com/embed/afFNpYO8w5w",
};
