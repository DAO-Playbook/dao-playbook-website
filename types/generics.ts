import { StaticImageData } from 'next/image';
import { Attribute, WithData } from 'types';

export interface AddToCalendar {
  title: string;
  description?: string;
  start: Date;
  end?: Date;
}

export interface GuideSeriesType {
  role: string;
  name: string;
  quote: string;
  img: string | StaticImageData;
  img_sm: string | StaticImageData;
  headline: string;
}

export interface OurCommunityType {
  title: string;
  desc: string;
  img: string | StaticImageData;
}

type Thumbnails = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string;
  size: number;
  width: number;
  height: number;
};

type Formats = {
  thumbnails: Thumbnails;
};

type AvatarAttribute = {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string | StaticImageData;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
  createdAt: string;
  updatedAt: string;
};

type Avatar = WithData<Attribute<AvatarAttribute>>;

export interface Speaker {
  name: string;
  avatar: Avatar;
  role: string;
  companyName: string;
  professionalSummary: string;
  twitterProfileUrl: string;
  linkedInProfileUrl: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Audio {
  name: string;
  alternativeText: string;
  caption: string;
  width: string;
  height: string;
  formats: string;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
  createdAt: string;
  updatedAt: string;
}

export interface EventsData {
  title: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  description: string;
  speakers: WithData<Array<Attribute<Speaker>>>;
  audio: WithData<Attribute<Audio>[]>;
}

export type EventsType = Attribute<EventsData>;

type Category = {
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

interface ResourceData {
  title: string;
  popular: boolean;
  description: string;
  content: string;
  category: WithData<Attribute<Category>>;
  slug: string;
  date: string;
  featuredImage: Avatar;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export type ResourcesType = Attribute<ResourceData>;

export enum ButtonVariants {
  // eslint-disable-next-line no-unused-vars
  Primary = 'primary',
  // eslint-disable-next-line no-unused-vars
  Link = 'link',
}
