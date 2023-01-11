import { ampel } from "./ampel/ampel";
import { donna } from "./donna/donna";
import { korg } from "./korg/korg";
import { kyckling } from "./kyckling/kyckling";
import { lantvallen } from "./lantvallen/lantvallen";
import { laptop } from "./laptop/laptop";
import { laura } from "./laura/laura";
import { lov } from "./lov/lov";
import { presentband } from "./presentband/presentband";
import { skogsstjarna } from "./skogsstjarna/skogsstjarna";
import { snoflinga } from "./snoflinga/snoflinga";
import { tammy } from "./tammy/tammy";
import { tomteluva } from "./tomteluva/tomteluva";
import { LinkType, Pattern, Tag } from "./types";
import { uggla } from "./uggla/uggla";

export const patterns: Pattern[] = [
  ampel,
  donna,
  korg,
  laptop,
  laura,
  snoflinga,
  tammy,
  tomteluva,
  presentband,
  uggla,
  lov,
  kyckling,
  lantvallen,
  skogsstjarna,
];

export const patternTagToString = (tag: Tag): string => {
  return {
    [Tag.PDF]: "PDF",
    [Tag.Video]: "Video",
    [Tag.Beginner]: "Nybörjarvänligt",
  }[tag];
};

export const linkTypeToLinkString = (linkType: LinkType): string => {
  return {
    [LinkType.PDF]: "Ladda ner mönster",
    [LinkType.Print]: "Ladda ner utskriftsversion",
  }[linkType];
};

export const sortPatternsByDate = (patterns: Pattern[]): Pattern[] =>
  patterns.sort((a, b) => (a.date < b.date ? 1 : -1));

export const sortPatternsByName = (patterns: Pattern[]): Pattern[] =>
  patterns.sort((a, b) => (a.title > b.title ? 1 : -1));

export const getPatternDateString = (pattern: Pattern): string =>
  `🗓 ${pattern.date.toISOString().split("T")[0]}`;
