import React from 'react';
import cx from 'classnames';
import PartTag from '../PartTag';

import styles from './BookPartNavigation.module.scss';

const BookPartNavigation = () => {
  return (
    <aside className={styles.BookPartNavigation}>
      <nav className={styles.Book_part}>
        <p className={styles.Book_title}>THE DAO PLAYBOOK (PARTS I - V)</p>
        <ul className={styles.Book_part_list}>
          <li
            className={cx(styles.Book_part_item, {
              [styles.Book_part_item_active]: true,
            })}
          >
            <PartTag color='#7876D0' />
            PT I - What is a DAO?
          </li>
          <li className={styles.Book_part_item}>
            <PartTag color='#F3D568' />
            pt - ii Types of DAOs?
          </li>
          <li className={styles.Book_part_item}>
            <PartTag color='#EC90BF' />
            PT - III Creating Your Own DAO
          </li>
        </ul>
      </nav>
      <div className={styles.Book_next_release}>
        <div className={styles.Book_next_release_heading}>
          <p>NEXT RELEASE</p>
          <p>AUG 30, 2023</p>
        </div>
        <h4 className={styles.Book_next_release_title}>
          Part I, Chapter 3
          <br />
          How do I even begin?
        </h4>
      </div>
    </aside>
  );
};

export default BookPartNavigation;
