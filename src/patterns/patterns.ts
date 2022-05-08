import { donna } from "./donna/donna";
import { laptop } from "./laptop/laptop";
import { laura } from "./laura/laura";
import { Pattern, Tag } from "./types";

export const patterns: Pattern[] = [donna, laptop, laura];

export const patternTagToString = (tag: Tag): string => {
  return {
    [Tag.PDF]: "PDF",
    [Tag.Video]: "YouTube",
    [Tag.Print]: "Utskrift",
  }[tag];
};

export const sortPatternsByDate = (patterns: Pattern[]): Pattern[] =>
  patterns.sort((a, b) => (a.date < b.date ? 1 : -1));

export const sortPatternsByName = (patterns: Pattern[]): Pattern[] =>
  patterns.sort((a, b) => (a.title > b.title ? 1 : -1));
