import { Pattern, Tag } from "../types";
import image from "./uggla.jpg";
import content from "./uggla.md";

export const uggla: Pattern = {
  id: "uggla",
  title: "Uggla",
  image: {
    src: image,
    objectPosition: "center",
  },
  date: new Date("2019-08-08"),
  tags: [Tag.Video],
  links: [],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  info: {
    hook: "3 mm",
    yarn: "Ett som passar virknål 3-4, gärna i 2 färger.",
    level: "Enkel",
  },
  video: "https://www.youtube.com/embed/NVEQmjDDI5o",
  content,
};
