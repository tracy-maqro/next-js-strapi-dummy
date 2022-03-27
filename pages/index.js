import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import BlockManager from '../components/shared/BlockManager';

export default function Home({ pages }) {
  return (
    <div>
      {pages &&
        pages.map((page, index) => <BlockManager blocks={page} key={index} />)}
    </div>
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
