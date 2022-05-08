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
  tags: [Tag.PDF, Tag.Video, Tag.Print],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  video: "https://www.youtube.com/watch?v=sIDy0hhB_uo",
};
