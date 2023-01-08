import { Pattern, Tag } from "../types";
import image from "./tomteluva.jpg";
import content from "./tomteluva.md";

export const tomteluva: Pattern = {
  id: "tomteluva",
  title: "Tomteluva",
  image: {
    src: image,
    objectPosition: "center right",
  },
  date: new Date("2017-12-19"),
  tags: [Tag.Video],
  links: [],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  info: {
    hook: "7 mm",
    yarn: "Ett som passar garnet. 50g vitt och 100g rött.",
    level: "Enkel",
  },
  video: "https://www.youtube.com/embed/AApm6Vlz1L8",
  content,
};
