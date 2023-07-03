import React from 'react';
import { window } from 'browser-monads';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getChapters } from '@api/book';
import Layout from '@sharedComponents/Layout';
import { GetStaticProps, NextPage } from 'next';
import { WithAttribute } from 'types';
import { Chapter as TChapter } from 'types/book';
import { DAO_PLAYBOOK_CMS_URL } from '@data/env';
import Details from '@pageComponents/chapter/Details';
import Content from '@pageComponents/chapter/Content/Content';
import NextChapter from '@pageComponents/chapter/NextChapter/NextChapter';

interface ChapterProps {
  chapter: WithAttribute<TChapter>;
  content: MDXRemoteSerializeResult | null;
}

const Chapter: NextPage<ChapterProps> = ({ chapter, content }) => {
  return (
    <Layout
      meta={{
        title: chapter?.attributes?.title || '',
        description: chapter?.attributes?.excerpt || '',
        url: `${window.location.href}`,
        image: `${DAO_PLAYBOOK_CMS_URL}${
          chapter?.attributes?.featuredImage?.data?.attributes?.url || ''
        }`,
      }}
    >
      <Details chapter={chapter} />
      {content && <Content content={content} />}
      <NextChapter chapter={chapter} />
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

  const paths = chapters.data
    .map(({ attributes: { slug, isTeaser } }) =>
      isTeaser
        ? null
        : {
            params: { slug },
          },
    )
    .filter(Boolean);

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

  const chapter = chapters.data[0];

  let mdxSource = null;
  if (chapter.attributes.content)
    mdxSource = await serialize(chapter.attributes.content);

  return { props: { chapter, content: mdxSource } };
};

export default Chapter;
