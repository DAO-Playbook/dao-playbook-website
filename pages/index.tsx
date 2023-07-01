import { GetStaticProps, NextPage } from 'next';
import Layout from '@sharedComponents/Layout';
import Hero from '../pageComponents/home/Hero';
import { metaData } from '@data/pageMeta';
import Contact from '@pageComponents/home/Contact/Contact';

const Home: NextPage = () => {
  return (
    <Layout meta={metaData.home}>
      <Hero />
      <Contact/>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default Home;
