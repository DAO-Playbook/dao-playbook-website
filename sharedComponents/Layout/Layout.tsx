import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Footer from '@sharedComponents/Footer';
import Header from '@sharedComponents/Header';

interface Meta {
  title: string;
  description: string;
  url: string;
}

interface LayoutProps {
  children: React.ReactNode;
  meta: Meta;
  className?: string;
}

const Layout: NextPage<LayoutProps> = ({ children, className, meta }) => {
  return (
    <>
      <Header />
      <Head>
        <title>Dao Playbook | {meta.title}</title>
        <meta name='title' content={meta.title} />
        <meta name='description' content={meta.description} />
        <meta property='og:url' content={meta.url} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:description' content={meta.description} />
        <meta name='twitter:url' content={meta.url} />
        <meta name='twitter:description' content={meta.description} />
        <meta property='al:web:url' content={meta.url} />
      </Head>
      <main className={className}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
