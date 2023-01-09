import { Pattern, Tag } from "../types";
import image from "./tammy.jpg";
import content from "./tammy.md";

export const tammy: Pattern = {
  id: "tammy",
  title: "Pannband Tammy",
  image: {
    src: image,
    objectPosition: "center left",
  },
  date: new Date("2017-10-29"),
  tags: [Tag.Video],
  links: [],
  description:
    "Pannbandet Tammy går att virka med valfritt garn! Använt ett varmt ullgarn och Tammy kommer hålla dina öron varma hela vintern!",
  info: {
    hook: "Valfri (i videon används 7 mm)",
    yarn: "Ett som passar garnet (för mig gick det åt ca 50g)",
    level: "Passar nybörjare",
  },
  video: "https://www.youtube.com/embed/6SGKlKv49sc",
  content,
};
