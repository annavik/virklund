import { Pattern, Tag } from "../types";
import pdf from "./annavirklund_ampel.pdf";
import print from "./annavirklund_ampel_print.pdf";
import image from "./ampel.jpg";

export const ampel: Pattern = {
  id: "ampel",
  title: "Ampel",
  image: {
    src: image,
    objectPosition: "center left",
  },
  date: new Date("2017-07-26"),
  tags: [Tag.PDF, Tag.Print, Tag.Video],
  links: [
    {
      type: Tag.PDF,
      src: pdf,
    },
    {
      type: Tag.Print,
      src: print,
    },
  ],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  info: {
    hook: "7mm",
    yarn: "50 g garn som passar virknål 4-5. Mönstret virkas med dubbelt garn.",
    level: "Passar nybörjare",
  },
  video: "https://www.youtube.com/embed/6QzmLfnjKD0",
};
