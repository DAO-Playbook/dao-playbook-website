import React from 'react';

import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section className={styles.Contact} id='contact'>
      <h2>Get in touch</h2>
      <p>
        Have a question or need further guidance? Reach out to us at{' '}
        <a
          rel='noopener noreferrer'
          target='_blank'
          href='mailto:help@daoplaybook.com'
        >
          help@daoplaybook.com
        </a>
      </p>
      <p>We’re here to help you navigate the world of DAOs.</p>
    </section>
  );
};

export default Contact;
