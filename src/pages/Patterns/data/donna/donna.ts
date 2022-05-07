import { Pattern, Tag } from "../types";
import image from "./donna.jpg";

export const donna: Pattern = {
  id: "donna",
  title: "Sjal Donna",
  image: {
    src: image,
  },
  date: new Date("2017-10-02"),
  tags: [Tag.PDF, Tag.Video, Tag.Print],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  video: "https://www.youtube.com/watch?v=afFNpYO8w5w",
};
