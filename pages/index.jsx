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
      <>
        <Head>
          <title>HassanMixtape</title>

        </Head>
        <Header />
        <Section {...mainPost} />
        <BlogList posts = {otherPosts} />
        <Footer />
      </>
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