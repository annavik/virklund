import { Pattern, Tag } from "../types";
import image from "./korg.jpg";

export const korg: Pattern = {
  id: "korg",
  title: "Brödkorg",
  image: {
    src: image,
    objectPosition: "center left",
  },
  date: new Date("2017-08-25"),
  tags: [Tag.Video],
  links: [],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  info: {
    hook: "5mm",
    yarn: "100 g Järbo Soft Cotton (eller liknande). Mönstret virkas med dubbelt garn.",
    level: "Passar nybörjare",
  },
  video: "https://www.youtube.com/embed/rrpszsbOJA4",
};
