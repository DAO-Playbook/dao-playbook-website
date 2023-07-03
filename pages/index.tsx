import { GetStaticProps, NextPage } from 'next';
import Layout from '@sharedComponents/Layout';
import Hero from '../pageComponents/home/Hero';
import { metaData } from '@data/pageMeta';
import Contact from '@pageComponents/home/Contact/Contact';
import Book from '@pageComponents/home/Book/Book';
import { getBooks } from '@api/book';
import { Books } from 'types/book';

interface HomeProps {
  books: Books;
}

const Home: NextPage<HomeProps> = ({ books }) => {
  const book = books.data[0];
  return (
    <Layout meta={metaData.home}>
      <Hero />
      {book && <Book book={book} />}
      <Contact />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const books = await getBooks({
    populate: {
      parts: {
        populate: ['chapters'],
      },
    },
  });

  return { props: { books } };
};

export default Home;
