import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import styles from './Header.module.scss';
import { DaoLogo } from '@assets/svgs';
import Button from '@sharedComponents/Button/Button';
import { LayoutContext } from '@contexts/Layout';

const Header: NextPage = () => {
  const { setLayoutContextValue } = React.useContext(LayoutContext);
  return (
    <header className={styles.Header}>
      <Link className={styles.Header_logo} href='/'>
        <DaoLogo />
      </Link>
      <Button
        onClick={() => setLayoutContextValue({ showNewsletterModal: true })}
        className={styles.Header_button}
      >
        Get in touch
      </Button>
    </header>
  );
};

export default Header;
