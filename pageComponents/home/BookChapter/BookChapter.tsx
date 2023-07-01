import React from 'react';
import Button from '@sharedComponents/Button';
import { ButtonVariants } from 'types';

import styles from './BookChapter.module.scss';

interface BookChapterProps {
  isTeaser?: boolean;
}

const BookChapter: React.FC<BookChapterProps> = ({ isTeaser }) => {
  return (
    <div className={styles.BookChapter}>
      <h3>
        Part I, Chapter 1
        <br />
        Understanding DAOs
      </h3>
      <p>
        Learn what a DAO is, the philosophy behind it, and why it's making waves
        in the world of technology and governance. Discover its unique features,
        such as decentralized governance, blockchain technology, and smart
        contracts.
      </p>
      <div className={styles.BookChapter_action}>
        <p>PUBLISHED AUG 12, 2023</p>
        <Button variant={ButtonVariants.Link}>
          {isTeaser ? 'NOTIFY ME' : 'READ MORE'}
        </Button>
      </div>
    </div>
  );
};

export default BookChapter;
