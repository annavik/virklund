import { Pattern, Tag } from "../types";
import pdf from "./annavirklund_donna.pdf";
import print from "./annavirklund_donna_print.pdf";
import image from "./donna.jpg";

export const donna: Pattern = {
  id: "donna",
  title: "Sjal Donna",
  image: {
    src: image,
  },
  date: new Date("2017-10-02"),
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
    yarn: "150-200 g av ett garn som passar virknål 4-5.",
    level: "Passar nybörjare",
  },
  video: "https://www.youtube.com/embed/afFNpYO8w5w",
};
