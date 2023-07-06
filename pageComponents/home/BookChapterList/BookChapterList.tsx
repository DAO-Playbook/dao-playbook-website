import React from 'react';
import { omit, uniqueId } from 'lodash';
import { formatQuantity } from 'format-quantity';
import { useMediaQuery } from 'react-responsive';
import BookChapter from '@sharedComponents/BookChapter';
import { BookContext } from '@contexts/Book';
import Select, { Option } from '@sharedComponents/Select';
import PartName from '@sharedComponents/PartName';

import styles from './BookChapterList.module.scss';

const BookChapterList = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { activePart, book, setBookContextValue } =
    React.useContext(BookContext);
  const parts = book?.attributes.parts.data || [];
  const chapters = activePart?.attributes.chapters;
  const availableChaptersCount = chapters?.data.filter(
    chapter => !chapter.attributes.isTeaser,
  ).length;

  const renderPartName = (option: Option) => {
    const activePart = parts.find(({ id }) => id === option.value);
    if (activePart) return <PartName part={activePart} />;
    return undefined;
  };

  const renderOption = ({
    option,
    ...props
  }: {
    tabIndex: number;
    option: Option;
    active: boolean;
    // eslint-disable-next-line no-unused-vars
    onClick: (e: any) => void;
    className: string;
  }) => {
    return (
      <li key={uniqueId('option')} {...omit(props, ['option', 'active'])}>
        {renderPartName(option)}
      </li>
    );
  };

  return (
    <div className={styles.BookChapterList}>
      <div className={styles.BookChapterList_header}>
        {activePart && !isMobile && <PartName part={activePart} />}
        {isMobile && (
          <>
            <p className={styles.Book_title}>
              {book?.attributes.title}{' '}
              {parts.length > 1
                ? `(PARTS 
          ${String(formatQuantity(1, { romanNumerals: true })).toUpperCase()} - 
          ${String(
            formatQuantity(parts.length, { romanNumerals: true }),
          ).toUpperCase()})`
                : ''}
            </p>
            <Select
              options={parts.map(({ id, attributes: { title } }) => ({
                value: id,
                label: title,
              }))}
              onChange={option => {
                const activePart = parts.find(({ id }) => id === option.value);
                setBookContextValue({ activePart });
              }}
              renderOption={props => renderOption(props as any)}
              value={activePart?.id || ''}
              className={styles.Book_part_select}
              selectedText={option => option && renderPartName(option)}
            />
          </>
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
