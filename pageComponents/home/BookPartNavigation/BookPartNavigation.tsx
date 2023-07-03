import React from 'react';
import cx from 'classnames';
import { capitalize, uniqueId } from 'lodash';
import { formatQuantity } from 'format-quantity';
import { format } from 'date-fns';
import { BookContext } from '@contexts/Book';
import { getChapters } from '@api/book';
import { WithAttribute } from 'types';
import { Chapter } from 'types/book';
import PartName from '../PartName/PartName';

import styles from './BookPartNavigation.module.scss';

const BookPartNavigation = () => {
  const { book, activePart, setBookContextValue } =
    React.useContext(BookContext);
  const [nextRelease, setNextRelease] =
    React.useState<WithAttribute<Chapter> | null>(null);

  const parts = book?.attributes.parts.data || [];

  const fetchNextRelease = React.useCallback(async () => {
    const nextRelease = await getChapters({
      populate: '*',
      filters: {
        isTeaser: {
          $eq: true,
        },
      },
    });
    if (nextRelease.data.length > 0) setNextRelease(nextRelease.data[0]);
  }, []);

  React.useEffect(() => {
    book && setBookContextValue({ activePart: book?.attributes.parts.data[0] });
    fetchNextRelease();
  }, []);

  return (
    <aside className={styles.BookPartNavigation}>
      <nav className={styles.Book_part}>
        <p className={styles.Book_title}>
          {book?.attributes.title}{' '}
          {parts.length > 1
            ? `(PARTS 
          ${capitalize(String(formatQuantity(1, { romanNumerals: true })))} - 
          ${capitalize(
            String(formatQuantity(parts.length, { romanNumerals: true })),
          )})`
            : ''}
        </p>
        <ul className={styles.Book_part_list}>
          {parts.map(part => (
            <li
              className={cx(styles.Book_part_item, {
                [styles.Book_part_item_active]: part.id === activePart?.id,
              })}
              key={uniqueId('part')}
              onClick={() => setBookContextValue({ activePart: part })}
            >
              <PartName part={part} />
            </li>
          ))}
        </ul>
      </nav>
      {nextRelease && (
        <div className={styles.Book_next_release}>
          <div className={styles.Book_next_release_heading}>
            <p>NEXT RELEASE</p>
            {nextRelease.attributes.releaseDate && (
              <p>
                {format(
                  new Date(nextRelease.attributes.releaseDate),
                  'MMM dd, yyyy',
                )}
              </p>
            )}
          </div>
          <h4 className={styles.Book_next_release_title}>
            Part{' '}
            {capitalize(
              String(
                formatQuantity(
                  nextRelease.attributes.part.data.attributes.part,
                  { romanNumerals: true },
                ),
              ),
            )}
            , Chapter {nextRelease.attributes.chapter}
            <br />
            {nextRelease.attributes.title}
          </h4>
        </div>
      )}
    </aside>
  );
};

export default BookPartNavigation;
