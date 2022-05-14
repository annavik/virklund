import { Pattern, Tag } from "../types";
import pdf from "./annavirklund_laura.pdf";
import print from "./annavirklund_laura_print.pdf";
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
    "I det här mönstret virkar vi en mysig mössa inför hösten som jag har döpt till Laura Palmer. Det är en väldigt enkel och snabb mössa att virka!",
  info: {
    hook: "7mm",
    yarn: "100 g garn som passar virknål 4-5. Mönstret virkas med dubbelt garn.",
    level: "Passar nybörjare",
  },
  video: "https://www.youtube.com/embed/afFNpYO8w5w",
};
