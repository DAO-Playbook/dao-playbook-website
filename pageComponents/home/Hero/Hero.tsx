import { NextPage } from 'next';

import styles from './Hero.module.scss';

const Hero: NextPage = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.Hero_illustration}></div>
      <div className={styles.Hero_content}>
        <h1 className={styles.Hero_content_title}>
          Something Something Something Something Something
        </h1>
        <h4 className={styles.Hero_content_desc}>
          Something Something Something Something Something
        </h4>
      </div>
      <div className={styles.Hero_illustration}></div>
    </div>
  );
};

export default Hero;
