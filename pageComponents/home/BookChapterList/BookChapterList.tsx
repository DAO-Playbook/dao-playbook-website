import React from 'react';
import PartTag from '../PartTag';
import BookChapter from '../BookChapter';

import styles from './BookChapterList.module.scss';

const BookChapterList = () => {
  return (
    <div className={styles.BookChapterList}>
      <div className={styles.BookChapterList_header}>
        <p className={styles.Book_part_title}>
          <PartTag color='#7876D0' /> PT I - What is a DAO?
        </p>
        <p>2 OF 3 CHAPTERS AVAILABLE</p>
      </div>
      <div>
        <BookChapter />
        <BookChapter isTeaser />
      </div>
    </div>
  );
};

export default BookChapterList;
