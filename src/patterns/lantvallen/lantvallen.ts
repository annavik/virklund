import { Pattern, Tag } from "../types";
import image from "./lantvallen.jpg";
import content from "./lantvallen.md";

export const lantvallen: Pattern = {
  id: "lantvallen",
  title: "Väggbonad Lantvallen",
  description:
    "En mysig, ullig väggbonad i bohemisk stil. Ett perfekt projekt att göra av överblivet garn eftersom inte så mycket behövs av varje färg.",
  image: {
    src: image,
    objectPosition: "center right",
  },
  date: new Date("2021-04-28"),
  tags: [Tag.Video],
  links: [],
  info: {
    hook: "7mm",
    yarn: "Garn som passar virknål 3, gärna i ull.",
    level: "Enkel",
  },
  video:
    "https://www.youtube.com/embed/videoseries?list=PLpVo7v2ivZWndQpitaGfvyKYXlUnMk6HL",
  content,
};
