import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DaoLogo } from '@assets/svgs';
import Button from '@sharedComponents/Button/Button';
import React from 'react';
import styles from './Header.module.scss';

const Header: NextPage = () => {
  const router = useRouter();
  const handleScroll = () => {
    const targetId = 'contact';
    const elem = document.getElementById(targetId);
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: 'smooth',
    });
  };

  const handleGetInTouch = () => {
    if (router.pathname !== '/') {
      router.push('/#contact');
    } else handleScroll();
  };

  return (
    <header className={styles.Header}>
      <Link className={styles.Header_logo} href='/'>
        <DaoLogo />
      </Link>
      <Button
        onClick={() => handleGetInTouch()}
        className={styles.Header_button}
      >
        Get in touch
      </Button>
    </header>
  );
};

export default Header;
