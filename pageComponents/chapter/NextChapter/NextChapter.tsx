import React from 'react';
import { WithAttribute } from 'types';
import { Chapter } from 'types/book';

import styles from './NextChapter.module.scss';
import BookChapter from '@sharedComponents/BookChapter/BookChapter';
import { formatQuantity } from 'format-quantity';
import { capitalize } from 'lodash';

interface NextChapterProps {
  chapter: WithAttribute<Chapter>;
}

const NextChapter: React.FC<NextChapterProps> = ({ chapter }) => {
  const nextChapter = React.useMemo(() => {
    const currtChapterIndex =
      chapter.attributes.part.data.attributes.chapters.data.findIndex(
        item => item.id === chapter.id,
      );
    return chapter.attributes.part.data.attributes.chapters.data[
      currtChapterIndex + 1
    ];
  }, [chapter]);

  return (
    <section className={styles.NextChapter}>
      <p className={styles.NextChapter_heading}>
        NEXT CHAPTER IN PART{' '}
        {capitalize(
          String(
            formatQuantity(chapter.attributes.part.data.attributes.part, {
              romanNumerals: true,
            }),
          ),
        )}
      </p>
      <div className={styles.NextChapter_chapter}>
        <BookChapter
          chapter={nextChapter}
          part={chapter.attributes.part.data.attributes.part}
        />
      </div>
    </section>
  );
};

export default NextChapter;
