import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import BlockManager from '../components/shared/BlockManager';

export default function Home({ pages }) {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Roboto:wght@100&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div>
        Test Test
        {pages &&
          pages.map((page, index) => (
            <BlockManager blocks={page} key={index} />
          ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  // get posts from strapi api
  const res = await fetch('http://localhost:1337/pages/');

  const pages = await res.json();

  return {
    props: { pages },
  };
}
