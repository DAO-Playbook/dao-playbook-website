import React from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import styles from './Content.module.scss';
import { WithAttribute } from 'types';
import { Chapter } from 'types/book';

interface ContentProps {
  chapter: WithAttribute<Chapter>;
  content: MDXRemoteSerializeResult;
}

const Content: React.FC<ContentProps> = ({ chapter, content }) => {
  console.log('chapter :>> ', chapter);
  return (
    <section className={styles.Content}>
      <MDXRemote {...content} />
    </section>
  );
};

export default Content;
