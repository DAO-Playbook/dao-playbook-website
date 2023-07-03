import { createContext } from 'react';

export type DefaultValuesType = {
  showNewsletterModal: boolean;
};

export type DefaultMethodsType = {
  // eslint-disable-next-line no-unused-vars
  setLayoutContextValue: (x: Partial<Omit<DefaultValuesType, 'book'>>) => void;
};

export const DEFAULT_VALUES: DefaultValuesType = {
  showNewsletterModal: false,
};

export const DEFAULT_METHODS: DefaultMethodsType = {
  setLayoutContextValue: () => null,
};

export const LayoutContext = createContext({
  ...DEFAULT_VALUES,
  ...DEFAULT_METHODS,
});

LayoutContext.displayName = 'Layout';
