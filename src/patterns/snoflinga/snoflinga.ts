import { Pattern, Tag } from "../types";
import image from "./missing.jpg";

export const snoflinga: Pattern = {
  id: "snoflinga",
  title: "Snöflinga",
  image: {
    src: image,
    objectPosition: "center",
  },
  date: new Date("2017-12-03"),
  tags: [Tag.Video],
  links: [],
  description:
    "Julspecial! I det här mönstret virkar vi en liten snöflinga som passar bra lika bra i granen som i fönstret.",
  info: {
    hook: "3mm",
    yarn: "Ett som passar garnet, bara lite behövs.",
    level: "Enkel",
  },
  video: "https://www.youtube.com/embed/Q1ynLeRZLkg",
};
