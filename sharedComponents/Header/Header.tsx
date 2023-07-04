import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DaoLogo } from '@assets/svgs';
import Button from '@sharedComponents/Button/Button';
import React from 'react';
import { sendEmail } from '@utils/generics';
import { HELP_EMAIL_DATA } from '@data/constants';

import styles from './Header.module.scss';

const Header: NextPage = () => {
  return (
    <header className={styles.Header}>
      <Link className={styles.Header_logo} href='/'>
        <DaoLogo />
      </Link>
      <Button
        onClick={() => sendEmail(HELP_EMAIL_DATA)}
        className={styles.Header_button}
      >
        Get in touch
      </Button>
    </header>
  );
};

export default Header;
