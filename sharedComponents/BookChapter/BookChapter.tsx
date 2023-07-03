import React from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';
import { capitalize } from 'lodash';
import { formatQuantity } from 'format-quantity';
import { format } from 'date-fns';
import Button from '@sharedComponents/Button';
import { ButtonVariants, WithAttribute } from 'types';
import { Chapter } from 'types/book';
import { LayoutContext } from '@contexts/Layout';

import styles from './BookChapter.module.scss';

interface BookChapterProps {
  chapter: WithAttribute<Chapter>;
  part: number;
  className?: string;
}

const BookChapter: React.FC<BookChapterProps> = ({
  chapter,
  part,
  className,
}) => {
  const router = useRouter();
  const { setLayoutContextValue } = React.useContext(LayoutContext);
  return (
    <div className={cx(styles.BookChapter, className)}>
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
            else router.push(`/chapter/${chapter.attributes.slug}`);
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
