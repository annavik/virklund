export interface Pattern {
  id: string;
  title: string;
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
  description: string;
  video?: string;
}

export enum Tag {
  PDF,
  Print,
  Video,
}
