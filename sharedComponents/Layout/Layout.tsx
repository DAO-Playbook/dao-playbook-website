import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Footer from '@sharedComponents/Footer';
import Header from '@sharedComponents/Header';
import { LayoutContext } from '@contexts/Layout';
import NewsLetterModal from '@sharedComponents/NewsLetterModal';

interface Meta {
  title: string;
  description: string;
  url: string;
  image: string;
}

interface LayoutProps {
  children: React.ReactNode;
  meta: Meta;
  className?: string;
}

const Layout: NextPage<LayoutProps> = ({ children, className, meta }) => {
  const [state, setState] = React.useState({
    showNewsletterModal: false,
  });

  const handleStateChange = (newState: Partial<typeof state>) =>
    setState(state => ({ ...state, ...newState }));

  return (
    <LayoutContext.Provider
      value={{ ...state, setLayoutContextValue: handleStateChange }}
    >
      <Head>
        <title>{meta.title}</title>
        <meta name='title' content={meta.title} />
        <meta name='description' content={meta.description} />
        <meta property='og:url' content={meta.url} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:description' content={meta.description} />
        <meta name='twitter:url' content={meta.url} />
        <meta name='twitter:description' content={meta.description} />
        <meta property='al:web:url' content={meta.url} />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:image:src' content={meta.image} />
      </Head>
      <Header />
      <main className={className}>{children}</main>
      <Footer />
      <NewsLetterModal />
    </LayoutContext.Provider>
  );
};

export default Layout;
