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
    type: Tag;
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
  PDF,
  Print,
  Video,
}
