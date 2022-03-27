import BlockManager from '../components/shared/BlockManager';

export default function Page({ pageData }) {
  return <>{pageData && <BlockManager />}</>;
}

// how many pages there are
export async function getStaticPaths() {
  const res = await fetch('http://localhost:1337/pages');

  const pages = await res.json();

  const paths = pages.data.map((page) => ({
    params: { slug: page.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

// get data for blocks
export async function getStaticProps(context) {
  const { params, preview = null } = context;
  const { slug } = params;
  const global = await getGlobalData();

  const pageData = await getPageData(
    { slug: !params.slug ? '' : params.slug },
    preview
  );

  if (pageData == null) {
    // Giving the page no props will trigger a 404 page
    return { props: {} };
  }

  return {
    props: {
      global,
      pageData,
      preview,
    },
    revalidate: 60 * 60,
  };
}
