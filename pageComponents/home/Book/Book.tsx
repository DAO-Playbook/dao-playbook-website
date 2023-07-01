import React from 'react';

import styles from './Book.module.scss';
import BookAside from '../BookPartNavigation';
import BookChapterList from '../BookChapterList';

const Book = () => {
  return (
    <section className={styles.Book}>
      <BookAside />
      <BookChapterList />
    </section>
  );
};

export default Book;
