import PageLayout from './components/shared/pageLayout';
import Head from 'next/head';
import Header from './components/header';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Feed from './components/feed';
import Banner from './components/banner';

export default function Home({ posts }) {
  // Destructure posts from props here
  return (
    <div>
      <Head>
        <title>My own 9GAG</title>
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Header />
      <PageLayout>
        <Navbar />
        {/* Pass the posts prop to Feed component */}
        <Feed posts={posts} />
        <Banner />
      </PageLayout>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  // Example: Fetching posts data
  let posts = null;

  try {
    // Your fetch or database call logic here
    // posts = await fetchPostsOrGetData();

    // Example static data for illustration
    posts = [
      { title: 'Post 1', image: 'image1.jpg' },
      { title: 'Post 2', image: 'image2.jpg' },
    ];
  } catch (error) {
    console.error('Failed fetching posts:', error);
  }

  if (!posts) {
    posts = []; // Default value if posts is undefined or null
  }

  return {
    props: {
      posts,
    },
  };
}
