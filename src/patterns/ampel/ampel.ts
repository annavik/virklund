import { LinkType, Pattern, Tag } from "../types";
import image from "./ampel.jpg";
import content from "./ampel.md";
import pdf from "./annavirklund_ampel.pdf";
import print from "./annavirklund_ampel_print.pdf";

export const ampel: Pattern = {
  id: "ampel",
  title: "Ampel",
  image: {
    src: image,
    objectPosition: "center left",
  },
  date: new Date("2017-07-26"),
  tags: [Tag.PDF, Tag.Video, Tag.Beginner],
  links: [
    {
      type: LinkType.PDF,
      src: pdf,
    },
    {
      type: LinkType.Print,
      src: print,
    },
  ],
  description:
    "Mitt allra första egna mönster! En enkel ampel som blir fin med en krukväxt i och går snabbt att virka.",
  info: {
    hook: "7 mm",
    yarn: "50 g garn som passar virknål 4-5. Mönstret virkas med dubbelt garn.",
    level: "Passar nybörjare",
  },
  video: "https://www.youtube.com/embed/6QzmLfnjKD0",
  content,
};
