import Head from 'next/head';
import Header from '../components/Header';
import Section from '../components/Section';
import BlogList from '../components/BlogList';
import Footer from '../components/Footer';
import SanityService from '../services/SanityService';


export default function Home({ home, posts }) {
  const mainPost = posts.find((post) => post.slug === home.mainPostUrl);
  const otherPosts = posts.filter((post) => post.slug !== home.mainPostUrl);
  return (
    <div>
      <Head>
        <title>HassanMixtape</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Section {...mainPost} />
      <BlogList posts = {otherPosts} />
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const sanityService = new SanityService()
  const home = await sanityService.getHome();
  const posts = await sanityService.getPosts();

    return {
      props: {
        home,
        posts,
      },
    };
};