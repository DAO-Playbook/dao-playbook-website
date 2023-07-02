import { createContext } from 'react';

import { WithAttribute } from 'types';
import { Book, Part } from 'types/book';

export type DefaultValuesType = {
  book: WithAttribute<Book> | null;
  activePart: WithAttribute<Part> | null;
};

export type DefaultMethodsType = {
  // eslint-disable-next-line no-unused-vars
  setBookContextValue: (x: Partial<Omit<DefaultValuesType, 'book'>>) => void;
};

export const DEFAULT_VALUES: DefaultValuesType = {
  book: null,
  activePart: null,
};

export const DEFAULT_METHODS: DefaultMethodsType = {
  setBookContextValue: () => null,
};

export const BookContext = createContext({
  ...DEFAULT_VALUES,
  ...DEFAULT_METHODS,
});

BookContext.displayName = 'Book';
