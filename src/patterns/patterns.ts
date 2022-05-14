import { ampel } from "./ampel/ampel";
import { donna } from "./donna/donna";
import { laptop } from "./laptop/laptop";
import { laura } from "./laura/laura";
import { Pattern, Tag } from "./types";

export const patterns: Pattern[] = [ampel, donna, laptop, laura];

export const patternTagToString = (tag: Tag): string => {
  return {
    [Tag.PDF]: "PDF",
    [Tag.Print]: "Utskrift",
    [Tag.Video]: "YouTube",
  }[tag];
};

export const patternTagToLinkString = (tag: Tag): string => {
  return {
    [Tag.PDF]: "Ladda ner mönster",
    [Tag.Print]: "Ladda ner utskriftsversion",
    [Tag.Video]: "Till instruktionsvideo",
  }[tag];
};

export const sortPatternsByDate = (patterns: Pattern[]): Pattern[] =>
  patterns.sort((a, b) => (a.date < b.date ? 1 : -1));

export const sortPatternsByName = (patterns: Pattern[]): Pattern[] =>
  patterns.sort((a, b) => (a.title > b.title ? 1 : -1));
