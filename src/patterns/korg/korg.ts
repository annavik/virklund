import { Pattern, Tag } from "../types";
import image from "./missing.jpg";

export const korg: Pattern = {
  id: "korg",
  title: "Brödkorg",
  image: {
    src: image,
    objectPosition: "center",
  },
  date: new Date("2017-08-25"),
  tags: [Tag.Video],
  links: [],
  description:
    "I den här videon virkar vi en liten korg som är perfekt att servera bröd i. Eller varför inte nygräddade kanelbullar!?\n\nFör att korgen ska bli stabil är det viktigt att använda ett garn med lite styrsel i. I videon virkar jag med garnet Soft Cotton från Järbo Garn. För mig gick det åt ungefär två stycken vanliga nystan (som jag rullade upp till ett dubbelnystan), men det kan variera lite.",
  info: {
    hook: "5mm",
    yarn: "100 g Järbo Soft Cotton (eller liknande). Mönstret virkas med dubbelt garn.",
    level: "Passar nybörjare",
  },
  video: "https://www.youtube.com/embed/rrpszsbOJA4",
};
