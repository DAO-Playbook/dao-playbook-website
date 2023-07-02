import React from 'react';
import cx from 'classnames';
import { capitalize, uniqueId } from 'lodash';
import { formatQuantity } from 'format-quantity';
import { PART_TAG_COLORS } from '@data/constants';
import PartTag from '../PartTag';
import { BookContext } from '@contexts/Book';

import styles from './BookPartNavigation.module.scss';
import { getChapter } from '@api/book';
import { WithAttribute } from 'types';
import { Chapter } from 'types/book';
import { format } from 'date-fns';

const BookPartNavigation = () => {
  const { book, activePart, setBookContextValue } =
    React.useContext(BookContext);
  const [nextRelease, setNextRelease] =
    React.useState<WithAttribute<Chapter> | null>(null);

  const parts = book?.attributes.parts.data || [];

  const fetchNextRelease = React.useCallback(async () => {
    const nextRelease = await getChapter({
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

  console.log('nextRelease :>> ', nextRelease);

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
              <PartTag color={PART_TAG_COLORS[part.attributes.part - 1]} />
              PT{' '}
              {capitalize(
                String(
                  formatQuantity(part.attributes.part, { romanNumerals: true }),
                ),
              )}{' '}
              - {part.attributes.title}
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
