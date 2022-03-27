import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home({ pages }) {
  console.log(pages)
  return (
    <div>
      {pages && pages.map((page) => (
        <div key={page._id}>
          <h2>{page.Title}</h2>  
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  // get posts from strapi api
  const res = await fetch('http://localhost:1337/pages/');

  const pages = await res.json();

  return {
    props: {pages},
  };
}
