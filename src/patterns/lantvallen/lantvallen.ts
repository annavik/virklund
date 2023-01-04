import { Pattern, Tag } from "../types";
import image from "./lantvallen.jpg";

export const lantvallen: Pattern = {
  id: "lantvallen",
  title: "Väggbonad Lantvallen",
  image: {
    src: image,
    objectPosition: "center right",
  },
  date: new Date("2021-04-28"),
  tags: [Tag.Video],
  links: [],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  info: {
    hook: "7mm",
    yarn: "Garn som passar virknål 3, gärna i ull.",
    level: "Enkel",
  },
  video:
    "https://www.youtube.com/embed/videoseries?list=PLpVo7v2ivZWndQpitaGfvyKYXlUnMk6HL",
};
