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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  info: {
    hook: "Valfri (i videon används 7 mm)",
    yarn: "Ett som passar garnet (för mig gick det åt ca 50g)",
    level: "Passar nybörjare",
  },
  video: "https://www.youtube.com/embed/6SGKlKv49sc",
  content,
};
