import { Pattern, Tag } from "../types";
import image from "./uggla.jpg";
import content from "./uggla.md";

export const uggla: Pattern = {
  id: "uggla",
  title: "Uggla",
  image: {
    src: image,
    objectPosition: "center",
  },
  date: new Date("2019-08-08"),
  tags: [Tag.Video],
  links: [],
  description:
    "Dom här söta små ugglorna håller koll på ditt hem. Virka en och snart kanske du har en hel familj?",
  info: {
    hook: "3 mm",
    yarn: "Ett som passar virknål 3-4, gärna i 2 färger.",
    level: "Enkel",
  },
  video: "https://www.youtube.com/embed/NVEQmjDDI5o",
  content,
};
