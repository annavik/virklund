import { Pattern, Tag } from "../types";
import image from "./kyckling.jpg";
import content from "./kyckling.md";

export const kyckling: Pattern = {
  id: "kyckling",
  title: "Kyckling",
  image: {
    src: image,
    objectPosition: "center",
  },
  date: new Date("2021-04-01"),
  tags: [Tag.Video],
  links: [],
  description:
    "Piffa till påskriset med ett gäng gulliga kycklingar! När du väl gjort en är det svårt att inte göra fler och fler av bara farten...",
  info: {
    hook: "3 mm",
    yarn: "Garn som passar virknål 3, gärna i bomull.",
    level: "Enkel",
  },
  video: "https://www.youtube.com/embed/drJAokQZBmk",
  content,
};
