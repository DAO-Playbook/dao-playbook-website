import { GetStaticProps, NextPage } from 'next';
import Layout from '@sharedComponents/Layout';
import Hero from '../pageComponents/home/Hero';
import { metaData } from '@data/pageMeta';
import Contact from '@pageComponents/home/Contact/Contact';
import Book from '@pageComponents/home/Book/Book';

const Home: NextPage = () => {
  return (
    <Layout meta={metaData.home}>
      <Hero />
      <Book />
      <Contact />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default Home;
