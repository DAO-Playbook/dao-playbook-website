import React from 'react';
import { capitalize, uniqueId } from 'lodash';
import { formatQuantity } from 'format-quantity';
import PartTag from '../PartTag';
import BookChapter from '../BookChapter';
import { BookContext } from '@contexts/Book';
import { PART_TAG_COLORS } from '@data/constants';

import styles from './BookChapterList.module.scss';

const BookChapterList = () => {
  const { activePart } = React.useContext(BookContext);
  const chapters = activePart?.attributes.chapters;
  const availableChaptersCount = chapters?.data.filter(
    chapter => !chapter.attributes.isTeaser,
  ).length;
  return (
    <div className={styles.BookChapterList}>
      <div className={styles.BookChapterList_header}>
        {activePart && (
          <p className={styles.Book_part_title}>
            <PartTag color={PART_TAG_COLORS[activePart.attributes.part - 1]} />
            PT{' '}
            {capitalize(
              String(
                formatQuantity(activePart.attributes.part, {
                  romanNumerals: true,
                }),
              ),
            )}{' '}
            - {activePart.attributes.title}
          </p>
        )}
        <p>
          {availableChaptersCount} OF {chapters?.data.length} CHAPTERS AVAILABLE
        </p>
      </div>
      <div>
        {chapters?.data.map(chapter => (
          <BookChapter
            part={activePart?.attributes.part!}
            chapter={chapter}
            key={uniqueId('chapter')}
          />
        ))}
      </div>
    </div>
  );
};

export default BookChapterList;
