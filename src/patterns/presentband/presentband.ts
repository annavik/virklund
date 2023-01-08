import { Pattern, Tag } from "../types";
import image from "./presentband.jpg";
import content from "./presentband.md";

export const presentband: Pattern = {
  id: "presentband",
  title: "Presentband",
  image: {
    src: image,
    objectPosition: "center left",
  },
  date: new Date("2018-12-24"),
  tags: [Tag.Video],
  links: [],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  info: {
    hook: "Valfri (i videon används 3 mm)",
    yarn: "Ett som passar garnet.",
    level: "Enkel",
  },
  video: "https://www.youtube.com/embed/BHdju0ApshU",
  content,
};
