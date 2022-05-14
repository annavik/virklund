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
  tags: [Tag.PDF, Tag.Print, Tag.Video],
  links: [],
  description:
    "I det här mönstret virkar vi en mysig mössa inför hösten som jag har döpt till Laura Palmer. Det är en väldigt enkel och snabb mössa att virka!",
  video: "https://www.youtube.com/embed/afFNpYO8w5w",
};
