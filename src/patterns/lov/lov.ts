import { Pattern, Tag } from "../types";
import image from "./lov.jpg";
import content from "./lov.md";

export const lov: Pattern = {
  id: "lov",
  title: "Löv",
  image: {
    src: image,
    objectPosition: "center",
  },
  date: new Date("2019-08-08"),
  tags: [Tag.Video],
  links: [],
  description:
    "Virkade löv blir fina i påskriset eller som dekoration i hemmet året runt. Bara fantasin sätter gränser!",
  info: {
    hook: "3 mm",
    yarn: "Garn som passar virknål 3, gärna i bomull.",
    level: "Enkel",
  },
  video: "https://www.youtube.com/embed/KiK4PIMof_Q",
  content,
};
