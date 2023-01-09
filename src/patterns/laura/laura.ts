import { Pattern, Tag } from "../types";
import pdf from "./annavirklund_laura.pdf";
import print from "./annavirklund_laura_print.pdf";
import image from "./laura.jpg";
import content from "./laura.md";

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
    "Mössan Laura skyddar dig från kyliga vindpustar. Ett perfekt nybörjarprojekt som går snabbt att virka!",
  info: {
    hook: "7 mm",
    yarn: "100 g garn som passar virknål 4-5. Mönstret virkas med dubbelt garn.",
    level: "Passar nybörjare",
  },
  video: "https://www.youtube.com/embed/-1L-asn0WOc",
  content,
};
