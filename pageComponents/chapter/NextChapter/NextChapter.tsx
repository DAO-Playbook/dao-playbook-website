import React from 'react';
import { formatQuantity } from 'format-quantity';
import { WithAttribute } from 'types';
import { Chapter } from 'types/book';
import BookChapter from '@sharedComponents/BookChapter/BookChapter';

import styles from './NextChapter.module.scss';

interface NextChapterProps {
  chapter: WithAttribute<Chapter>;
}

const NextChapter: React.FC<NextChapterProps> = ({ chapter }) => {
  const nextChapter = React.useMemo(() => {
    const currtChapterIndex =
      chapter?.attributes?.part?.data?.attributes?.chapters?.data?.findIndex(
        item => item.id === chapter.id,
      );
    return chapter?.attributes?.part?.data?.attributes?.chapters?.data[
      currtChapterIndex + 1
    ];
  }, [chapter]);

  return (
    <section className={styles.NextChapter}>
      <p className={styles.NextChapter_heading}>
        NEXT CHAPTER IN PART{' '}
        {String(
          formatQuantity(chapter?.attributes?.part?.data?.attributes?.part, {
            romanNumerals: true,
          }),
        ).toUpperCase()}
      </p>
      <div className={styles.NextChapter_chapter}>
        <BookChapter
          chapter={nextChapter}
          part={chapter?.attributes?.part?.data?.attributes?.part}
        />
      </div>
    </section>
  );
};

export default NextChapter;
