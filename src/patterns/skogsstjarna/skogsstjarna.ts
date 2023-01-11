import { LinkType, Pattern, Tag } from "../types";
import pdf from "./annavirklund_skogsstjarna.pdf";
import imageThumbnail from "./skogsstjarna-thumbnail.jpg";
import image from "./skogsstjarna.jpg";
import content from "./skogsstjarna.md";

export const skogsstjarna: Pattern = {
  id: "skogsstjarna",
  title: "Vimpel Skogsstjärna",
  image: {
    src: image,
    thumbnail: imageThumbnail,
    objectPosition: "center",
  },
  date: new Date("2023-01-10"),
  tags: [Tag.PDF],
  links: [
    {
      type: LinkType.PDF,
      src: pdf,
    },
  ],
  description:
    "Den här vimpeln är inpspirerad av växten skogstjärna. Ett passade mönster för vår och sommar när skogen börjar vakna till liv.",
  info: {
    hook: "2.5 mm (eller en som passar ditt garn)",
    yarn: "Exempelvis Järbo 8/4 i 2 färger. Bara lite behövs.",
    level: "Enkel/Medel",
  },
  content,
};
