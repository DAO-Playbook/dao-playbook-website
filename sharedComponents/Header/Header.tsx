import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import styles from './Header.module.scss';
import { DaoLogo } from '@assets/svgs';
import Button from '@sharedComponents/Button/Button';

const Header: NextPage = () => {
  return (
    <header className={styles.Header}>
      <Link className={styles.Header_logo} href='/'>
        <DaoLogo />
      </Link>
      <Button className={styles.Header_button}>Get in touch</Button>
    </header>
  );
};

export default Header;
