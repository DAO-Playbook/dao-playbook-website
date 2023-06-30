export * from './generics';

export type WithData<T> = {
  data: T;
};

export type Attribute<T> = {
  id: number;
  attributes: T;
};
