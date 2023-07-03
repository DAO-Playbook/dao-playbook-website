import React from 'react';
import Button from '@sharedComponents/Button';
import { ButtonVariants, WithAttribute } from 'types';

import styles from './BookChapter.module.scss';
import { Chapter } from 'types/book';
import { capitalize } from 'lodash';
import { formatQuantity } from 'format-quantity';
import { format } from 'date-fns';
import { LayoutContext } from '@contexts/Layout';

interface BookChapterProps {
  chapter: WithAttribute<Chapter>;
  part: number;
}

const BookChapter: React.FC<BookChapterProps> = ({ chapter, part }) => {
  const { setLayoutContextValue } = React.useContext(LayoutContext);
  return (
    <div className={styles.BookChapter}>
      <h3>
        Part{' '}
        {capitalize(
          String(
            formatQuantity(part, {
              romanNumerals: true,
            }),
          ),
        )}
        , Chapter {chapter.attributes.chapter}
        <br />
        {chapter.attributes.title}
      </h3>
      <p>{chapter.attributes.excerpt}</p>
      <div className={styles.BookChapter_action}>
        <p>
          {chapter.attributes.isTeaser ? 'AVAILABLE' : 'PUBLISHED'}{' '}
          {format(
            new Date(
              chapter.attributes.isTeaser && chapter.attributes.releaseDate
                ? chapter.attributes.releaseDate
                : chapter.attributes.publishedAt,
            ),
            'MMM dd, yyyy',
          )}
        </p>
        <Button
          onClick={() => {
            if (chapter.attributes.isTeaser)
              setLayoutContextValue({ showNewsletterModal: true });
          }}
          variant={ButtonVariants.Link}
        >
          {chapter.attributes.isTeaser ? 'NOTIFY ME' : 'READ MORE'}
        </Button>
      </div>
    </div>
  );
};

export default BookChapter;
