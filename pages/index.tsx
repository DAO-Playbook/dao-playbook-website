import { GetStaticProps, NextPage } from 'next';
import Layout from '@sharedComponents/Layout/Layout';
import Hero from '../pageComponents/home/Hero';
import { metaData } from '@data/pageMeta';

const Home: NextPage = () => {
  return (
    <Layout meta={metaData.home}>
      <Hero />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default Home;
