import React from 'react';
import { format } from 'date-fns';
import { capitalize } from 'lodash';
import Image from 'next/image';
import { formatQuantity } from 'format-quantity';
import PartName from '@sharedComponents/PartName';
import { WithAttribute } from 'types';
import { Chapter } from 'types/book';
import {
  FacebookFilledLogo,
  LinkedInFilledLogo,
  TwitterFilledLogo,
} from '@assets/svgs';

import styles from './Details.module.scss';

interface DetailsProps {
  chapter: WithAttribute<Chapter>;
}

const Details: React.FC<DetailsProps> = ({ chapter }) => {
  return (
    <section className={styles.Details}>
      <div className={styles.Details_part_info}>
        <PartName part={chapter?.attributes?.part?.data} />
        <p>
          PUBLISHED{' '}
          {format(new Date(chapter?.attributes?.publishedAt), 'MMM dd, yyyy')}
        </p>
      </div>
      <div className={styles.Details_title}>
        <h1>
          Part{' '}
          {capitalize(
            String(
              formatQuantity(
                chapter?.attributes?.part?.data?.attributes?.part,
                {
                  romanNumerals: true,
                },
              ),
            ),
          )}
          , Chapter {chapter?.attributes?.chapter}
          <br />
          {chapter?.attributes?.title}
        </h1>
        <div>
          <p>SHARE THIS POST</p>
          <div>
            {' '}
            <a href='#'>
              <FacebookFilledLogo />
            </a>
            <a href='#'>
              <TwitterFilledLogo />
            </a>
            <a href='#'>
              <LinkedInFilledLogo />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.Details_featured_image}>
        <Image
          src={chapter?.attributes.featuredImage?.data?.attributes?.url || ''}
          alt={chapter?.attributes?.title}
          width={996}
          height={376}
        />
      </div>
    </section>
  );
};

export default Details;
