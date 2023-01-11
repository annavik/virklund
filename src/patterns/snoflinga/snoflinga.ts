import { Pattern, Tag } from "../types";
import image from "./snoflinga.jpg";
import content from "./snoflinga.md";

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
    "Dom här gulliga snöflingorna passar bra i julgranen eller på julklappen. Ett kul litet julpyssel, gör så många du vill!",
  info: {
    hook: "3 mm",
    yarn: "Ett som passar nålen, bara lite behövs.",
    level: "Enkel",
  },
  video: "https://www.youtube.com/embed/Q1ynLeRZLkg",
  content,
};
