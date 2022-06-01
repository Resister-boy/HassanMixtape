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
          <meta name = "description" content = "Hassan's Insight" />
          <meta name = "auther" content = "Resister-boy" />
          <meta name = "viewport" content = "width = device-width, user-scalable = no, initial-scale = 1.0, maximum-scale = 1.0, minimum-scale = 1.0" />
          <meta http-equiv = "X-UA-Compatible" content = "ie = edge" /> 

          <meta property = "og:type" content = "website" />
          <meta property = "og:title" content = "HassanMixtape" />
          <meta property = "og:description" content = "Hassan's Insight" />
          <meta property = "og:image" content = "/public/mainImage.png" />
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