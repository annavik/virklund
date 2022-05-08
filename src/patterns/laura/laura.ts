import { Pattern, Tag } from "../types";
import image from "./laura.jpg";

export const laura: Pattern = {
  id: "laura",
  title: "Mössa Laura",
  image: {
    src: image,
    objectPosition: "center right",
  },
  date: new Date("2017-07-28"),
  tags: [Tag.PDF, Tag.Video, Tag.Print],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  video: "https://www.youtube.com/watch?v=-1L-asn0WOc",
};
