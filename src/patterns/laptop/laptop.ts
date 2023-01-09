import { LinkType, Pattern, Tag } from "../types";
import pdf from "./annavirklund_laptop.pdf";
import print from "./annavirklund_laptop_print.pdf";
import image from "./laptop.jpg";
import content from "./laptop.md";

export const laptop: Pattern = {
  id: "laptop",
  title: "Laptopfodral",
  image: {
    src: image,
    objectPosition: "center left",
  },
  date: new Date("2017-07-31"),
  tags: [Tag.PDF, Tag.Video, Tag.Beginner],
  links: [
    {
      type: LinkType.PDF,
      src: pdf,
    },
    {
      type: LinkType.Print,
      src: print,
    },
  ],
  description:
    "Imponera på jobbkollegorna med ett hemmagjort fodral till datorn. Men passa sig så att dom inte tvingar dig att virka till hela kontoret...",
  info: {
    hook: "7 mm",
    yarn: "Gärna i två färger (ca 200 g + 50 g), som passar virknål 4-5. Mönstret virkas med dubbelt garn.",
    level: "Passar nybörjare",
  },
  video: "https://www.youtube.com/embed/sIDy0hhB_uo",
  content,
};
