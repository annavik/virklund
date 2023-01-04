import { Pattern, Tag } from "../types";
import image from "./kyckling.jpg";

export const kyckling: Pattern = {
  id: "kyckling",
  title: "Kyckling",
  image: {
    src: image,
    objectPosition: "center",
  },
  date: new Date("2021-04-01"),
  tags: [Tag.Video],
  links: [],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  info: {
    hook: "3mm",
    yarn: "Garn som passar virknål 3, gärna i bomull.",
    level: "Enkel",
  },
  video: "https://www.youtube.com/embed/drJAokQZBmk",
};
