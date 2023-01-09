import { Pattern, Tag } from "../types";
import image from "./korg.jpg";
import content from "./korg.md";

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
    "Finns det något härligare än att servera fika i en egentillverkad korg? Tror inte det!",
  info: {
    hook: "5 mm",
    yarn: "100 g Järbo Soft Cotton (eller liknande). Mönstret virkas med dubbelt garn.",
    level: "Passar nybörjare",
  },
  video: "https://www.youtube.com/embed/rrpszsbOJA4",
  content,
};
