import { NextPage } from 'next';
import Link from 'next/link';
import { PageNotFoundIllustration } from '@assets/svgs';

import styles from './PageNotFound.module.scss';

const PageNotFound: NextPage = () => {
  return (
    <section className={styles.PageNotFound}>
      <header className={styles.PageNotFound_header}>
        <Link href='/'>Logo</Link>
      </header>
      <div className={styles.PageNotFound_text_box}>
        <h1>The page you are looking for does not exist</h1>
        <p>
          It may have been moved or deleted, or you simply entered a wrong
          address. <Link href='/'>Return to home</Link>
        </p>
      </div>
      <PageNotFoundIllustration className={styles.PageNotFound_illustration} />
    </section>
  );
};

export default PageNotFound;
