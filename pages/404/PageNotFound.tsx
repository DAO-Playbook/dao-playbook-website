import { NextPage } from 'next';
import Link from 'next/link';

import styles from './PageNotFound.module.scss';
import { DaoLogo } from '@assets/svgs';

const PageNotFound: NextPage = () => {
  return (
    <section className={styles.PageNotFound}>
      <header className={styles.PageNotFound_header}>
        <Link href='/'>
          <DaoLogo />
        </Link>
      </header>
      <div className={styles.PageNotFound_text_box}>
        <h1>The page you are looking for does not exist</h1>
        <p>
          It may have been moved or deleted, or you simply entered a wrong
          address. <Link href='/'>Return to home</Link>
        </p>
      </div>
    </section>
  );
};

export default PageNotFound;
