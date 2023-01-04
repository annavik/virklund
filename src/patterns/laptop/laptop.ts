import { Pattern, Tag } from "../types";
import pdf from "./annavirklund_laptop.pdf";
import print from "./annavirklund_laptop_print.pdf";
import image from "./laptop.jpg";

export const laptop: Pattern = {
  id: "laptop",
  title: "Laptopfodral",
  image: {
    src: image,
    objectPosition: "center left",
  },
  date: new Date("2017-07-31"),
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
    yarn: "Gärna i två färger (ca 200 g + 50 g), som passar virknål 4-5. Mönstret virkas med dubbelt garn.",
    level: "Passar nybörjare",
  },
  video: "https://www.youtube.com/embed/sIDy0hhB_uo",
};
