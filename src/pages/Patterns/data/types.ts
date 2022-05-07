export interface Pattern {
  id: string;
  title: string;
  image: {
    src: string;
    objectPosition?: string;
  };
  date: Date;
  tags: Tag[];
  description: string;
  video?: string;
}

export enum Tag {
  PDF,
  Video,
  Print,
}
