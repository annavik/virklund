import { donna } from "./donna/donna";
import { laptop } from "./laptop/laptop";
import { laura } from "./laura/laura";
import { Pattern, Tag } from "./types";

export const patterns: Pattern[] = [donna, laptop, laura];

export const tagToString = (tag: Tag): string => {
  return {
    [Tag.PDF]: "PDF",
    [Tag.Video]: "YouTube",
    [Tag.Print]: "Utskrift",
  }[tag];
};
