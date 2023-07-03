import React from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import styles from './Content.module.scss';

interface ContentProps {
  content: MDXRemoteSerializeResult;
}

const Content: React.FC<ContentProps> = ({ content }) => {
  return (
    <section className={styles.Content}>
      <MDXRemote {...content} />
    </section>
  );
};

export default Content;
