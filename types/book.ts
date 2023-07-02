import { StrapiImage, WithAttribute, WithData } from './generics';

export interface Chapter {
  chapter: number;
  content: string;
  createdAt: string;
  excerpt: string;
  isTeaser: boolean;
  publishedAt: string;
  slug: string;
  title: string;
  updatedAt: string;
  releaseDate?: string;
  part: WithData<WithAttribute<Part>>;
  featuredImage?: WithData<StrapiImage>;
}

export interface Part {
  createdAt: string;
  part: number;
  publishedAt: string;
  slug: string;
  title: string;
  updatedAt: string;
  chapters: Chapters;
}

export interface Book {
  createdAt: string;
  publishedAt: string;
  slug: string;
  title: string;
  updatedAt: string;
  parts: Parts;
}

export type Chapters = WithData<WithAttribute<Chapter>[]>;

export type Parts = WithData<WithAttribute<Part>[]>;

export type Books = WithData<WithAttribute<Book>[]>;
