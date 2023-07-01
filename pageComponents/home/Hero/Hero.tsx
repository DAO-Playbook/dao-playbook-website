'use client';

import { NextPage } from 'next';
import { useMediaQuery } from 'react-responsive';
import { HeroIllustration, MobileHeroIllustration } from '@assets/svgs';

import styles from './Hero.module.scss';

const Hero: NextPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <section className={styles.Hero}>
      <div className={styles.Hero_info}>
        <p>
          A Comprehensive Guide to Decentralized{isMobile ? <br /> : ' '}
          Autonomous Organizations
        </p>
      </div>
      <div className={styles.Hero_content}>
        {isMobile ? <MobileHeroIllustration /> : <HeroIllustration />}
        <div className={styles.Hero_content_textBox}>
          <h1>
            Welcome to
            <br />
            DAO Playbook
          </h1>
          <p>
            Navigate the world of Decentralized Autonomous Organizations (DAOs)
            with ease and confidence. We offer an extensive collection of
            resources and insights into what a DAO is, the types of DAOs, steps
            to set up a DAO, transitioning from a centralized entity into a DAO,
            and the valuable metrics DAOs measure. Join us as we delve into the
            future of organization and governance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
