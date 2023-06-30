import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.scss';

const Navbar: NextPage = () => {
  return (
    <nav className={styles.Navbar}>
      <Link href='/'>Logo</Link>
    </nav>
  );
};

export default Navbar;
