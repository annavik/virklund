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
    "Klart att datorn måste få sig ett fodral så att den inte skadas i väskan! I det här mönstret virkar vi ett fodral till en laptop i 13-tumsstorlek, men det går bra att anpassa storleken på fodralet.",
  info: {
    hook: "7mm",
    yarn: "Gärna i två färger (ca 200 g + 50 g), som passar virknål 4-5. Mönstret virkas med dubbelt garn.",
    level: "Passar nybörjare",
  },
  video: "https://www.youtube.com/embed/sIDy0hhB_uo",
};
