import React from 'react';
import { DAO_PLAYBOOK_HELP_EMAIL, HELP_EMAIL_DATA } from '@data/constants';
import { sendEmail } from '@utils/generics';

import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section className={styles.Contact}>
      <h2>Get in touch</h2>
      <p>
        Have a question or need further guidance? Reach out to us at{' '}
        <a
          rel='noopener noreferrer'
          target='_blank'
          href='#'
          onClick={e => {
            e.preventDefault();
            sendEmail(HELP_EMAIL_DATA);
          }}
        >
          {DAO_PLAYBOOK_HELP_EMAIL}
        </a>
      </p>
      <p>We’re here to help you navigate the world of DAOs.</p>
    </section>
  );
};

export default Contact;
