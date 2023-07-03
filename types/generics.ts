export interface IObject<T = any> {
  [x: string]: T;
}

type Format = {
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
  thumbnail: Format;
  medium: Format;
  small: Format;
};

export type StrapiImage = {
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
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
  createdAt: string;
  updatedAt: string;
};

export enum ButtonVariants {
  // eslint-disable-next-line no-unused-vars
  Primary = 'primary',
  // eslint-disable-next-line no-unused-vars
  Link = 'link',
}

export type WithData<T> = {
  data: T;
};

export type WithAttribute<T> = {
  id: number;
  attributes: T;
};

// eslint-disable-next-line no-unused-vars
export type TFunc<V, R = any> = (value: V) => R;
