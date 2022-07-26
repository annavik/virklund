import { Pattern, Tag } from "../types";
import image from "./missing.jpg";

export const tammy: Pattern = {
  id: "tammy",
  title: "Pannband Tammy",
  image: {
    src: image,
    objectPosition: "center",
  },
  date: new Date("2017-10-29"),
  tags: [Tag.Video],
  links: [],
  description:
    "I den här videon utökar vi Twin Peaks-kollektionen med pannbandet Tammy. Pannbandet är ett perfekt nybörjarprojekt eftersom det både är enkelt att virka och går snabbt att få klart. Det går även att anpassa beroende på virknål och garn.",
  info: {
    hook: "Valfri (i videon används 7mm)",
    yarn: "Ett som passar garnet (för mig gick det åt ca 50g)",
    level: "Passar nybörjare",
  },
  video: "https://www.youtube.com/embed/6SGKlKv49sc",
};
