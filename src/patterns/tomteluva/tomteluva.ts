import { Pattern, Tag } from "../types";
import image from "./missing.jpg";

export const tomteluva: Pattern = {
  id: "tomteluva",
  title: "Tomteluva",
  image: {
    src: image,
    objectPosition: "center",
  },
  date: new Date("2017-12-19"),
  tags: [Tag.Video],
  links: [],
  description:
    "I dagens julavsnitt virkar vi en tomteluva: ett måste för den som både älskar virkning och julen! Storleken på mössan går att anpassa genom att justera längden på den vita kanten. Tänk bara på att man senare kan behöva räkna lite annorlunda för att att få en jämn minskning av stolparna, men det fixar ni! ♡",
  info: {
    hook: "7mm",
    yarn: "Ett som passar garnet. 50g vitt och 100g rött.",
    level: "Enkel",
  },
  video: "https://www.youtube.com/embed/AApm6Vlz1L8",
};
