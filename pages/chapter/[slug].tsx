import { getChapters } from '@api/book';
import Layout from '@sharedComponents/Layout';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { window } from 'browser-monads';
import { WithAttribute } from 'types';
import { Chapter as TChapter } from 'types/book';
import { DAO_PLAYBOOK_CMS_URL } from '@data/env';
import Details from '@pageComponents/chapter/Details';

interface ChapterProps {
  chapter: WithAttribute<TChapter>;
}

const Chapter: NextPage<ChapterProps> = ({ chapter }) => {
  console.log('chapter :>> ', chapter);
  return (
    <Layout
      meta={{
        title: chapter.attributes.title,
        description: chapter.attributes.excerpt,
        url: `${window.location.href}`,
        image: `${DAO_PLAYBOOK_CMS_URL}${chapter.attributes.featuredImage?.data.attributes.url}`,
      }}
    >
      <Details chapter={chapter} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const chapters = await getChapters({
    pagination: {
      limit: 1000,
    },
    fields: ['slug'],
  });

  const paths = chapters.data.map(({ attributes: { slug } }) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps<
  ChapterProps,
  { slug: string }
> = async ({ params }) => {
  const chapters = await getChapters({
    populate: ['featuredImage', 'part.chapters'],
    filters: {
      slug: {
        $eq: params?.slug,
      },
    },
  });

  return { props: { chapter: chapters.data[0] } };
};

export default Chapter;
