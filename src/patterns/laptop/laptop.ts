import { Pattern, Tag } from "../types";
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
  links: [],
  description:
    "Klart att datorn måste få sig ett fodral så att den inte skadas i väskan! I det här mönstret virkar vi ett fodral till en laptop i 13-tumsstorlek, men det går bra att anpassa storleken på fodralet.",
  video: "https://www.youtube.com/embed/sIDy0hhB_uo",
};
