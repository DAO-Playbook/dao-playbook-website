'use client';

import { NextPage } from 'next';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { DaoLogo, LinkedInLogo, TwitterLogo } from '@assets/svgs';
import Button from '@sharedComponents/Button/Button';
import { ButtonVariants } from 'types';

import styles from './Footer.module.scss';
import React from 'react';
import { LayoutContext } from '@contexts/Layout';

const Footer: NextPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { setLayoutContextValue } = React.useContext(LayoutContext);
  return (
    <footer className={styles.Footer}>
      <Link className={styles.Footer_logo} href='/'>
        <DaoLogo />
      </Link>
      <div className={styles.Footer_social_links}>
        <a href='#'>
          <LinkedInLogo />
        </a>
        <a href='#'>
          <TwitterLogo />
        </a>
      </div>
      <Button
        onClick={() => setLayoutContextValue({ showNewsletterModal: true })}
        className={styles.Footer_button}
        variant={ButtonVariants.Link}
      >
        {`SUBSCRIBE ${isMobile ? '' : ' TO NEWSLETTER'}`}
      </Button>
    </footer>
  );
};

export default Footer;
