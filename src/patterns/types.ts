export interface Pattern {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    objectPosition?: string;
  };
  date: Date;
  tags: Tag[];
  links: {
    type: LinkType;
    src: string;
  }[];
  info: {
    hook: string;
    yarn: string;
    level: string;
  };
  video?: string;
  content?: string;
}

export enum Tag {
  Beginner,
  PDF,
  Video,
}

export enum LinkType {
  PDF,
  Print,
}
