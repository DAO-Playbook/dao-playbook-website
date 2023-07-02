import React from 'react';
import BookPartNavigation from '../BookPartNavigation';
import BookChapterList from '../BookChapterList';
import { WithAttribute } from 'types';
import { Part, Book as TBook } from 'types/book';
import { BookContext } from '@contexts/Book';

import styles from './Book.module.scss';

interface BookProps {
  book: WithAttribute<TBook>;
}

interface BookState {
  activePart: WithAttribute<Part> | null;
}

const Book: React.FC<BookProps> = ({ book }) => {
  const [state, setState] = React.useState<BookState>({
    activePart: null,
  });

  const handleStateChange = (newState: Partial<BookState>) =>
    setState(state => ({ ...state, ...newState }));

  return (
    <BookContext.Provider
      value={{ book, ...state, setBookContextValue: handleStateChange }}
    >
      <section className={styles.Book}>
        <BookPartNavigation />
        <BookChapterList />
      </section>
    </BookContext.Provider>
  );
};

export default Book;
