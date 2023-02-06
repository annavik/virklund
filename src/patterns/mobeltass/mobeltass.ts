import { LinkType, Pattern, Tag } from "../types";
import pdf from "./annavirklund_mobeltass.pdf";
import imageThumbnail from "./mobeltass-thumbnail.jpg";
import image from "./mobeltass.jpg";
import content from "./mobeltass.md";

export const mobeltass: Pattern = {
  id: "mobeltass",
  title: "Möbeltass",
  image: {
    src: image,
    thumbnail: imageThumbnail,
    objectPosition: "center right",
  },
  date: new Date("2023-02-06"),
  tags: [Tag.PDF],
  links: [
    {
      type: LinkType.PDF,
      src: pdf,
    },
  ],
  description:
    "Praktiskt behöver inte vara tråkigt! Den här möbeltassen lyser upp hemmet samtidigt som den skyddar bord och golv mot märken.",
  info: {
    hook: "5-9 mm",
    yarn: "Ett som passar nålen, gärna ett ulligt.",
    level: "Enkel/Medel",
  },
  content,
};
