import PageLayout from './components/shared/pageLayout';
import Head from 'next/head';
import Header from './components/header';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Feed from './components/feed';
import Banner from './components/banner';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My own 9GAG with black jack and hookers</title>
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Header />
      <PageLayout>
        <Navbar />
        <Feed />
        <Banner />
      </PageLayout>
      <Footer />
    </div>
  );
}
