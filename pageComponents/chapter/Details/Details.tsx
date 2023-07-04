import React from 'react';
import { format } from 'date-fns';
import { capitalize } from 'lodash';
import Image from 'next/image';
import qs from 'qs';

import { formatQuantity } from 'format-quantity';
import PartName from '@sharedComponents/PartName';
import { SharePlatform, WithAttribute } from 'types';
import { Chapter } from 'types/book';
import {
  FacebookFilledLogo,
  LinkedInFilledLogo,
  TwitterFilledLogo,
} from '@assets/svgs';
import { SHARE_PLATFORM_DATA } from '@data/constants';
import { APP_URL } from '@data/env';

import styles from './Details.module.scss';

interface DetailsProps {
  chapter: WithAttribute<Chapter>;
}

const Details: React.FC<DetailsProps> = ({ chapter }) => {
  const generateShareUrl = (platform: SharePlatform) => {
    const data = SHARE_PLATFORM_DATA[platform];
    return `${data.url}?${qs.stringify(
      data.getParams({
        url: `${APP_URL}/chapter/${chapter.attributes.slug}`,
        title: chapter.attributes.title,
        description: chapter.attributes.excerpt,
      }),
    )}`;
  };
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
            <a
              rel='noopener noreferrer'
              target='_blank'
              href={generateShareUrl(SharePlatform.Facebook)}
            >
              <FacebookFilledLogo />
            </a>
            <a
              rel='noopener noreferrer'
              target='_blank'
              href={generateShareUrl(SharePlatform.Twiter)}
            >
              <TwitterFilledLogo />
            </a>
            <a
              rel='noopener noreferrer'
              target='_blank'
              href={generateShareUrl(SharePlatform.LinkedIn)}
            >
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
