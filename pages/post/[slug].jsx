import Header from '../../components/Header';
import MainPost from '../../components/MainPost';
import PostDetail from '../../components/PostDetail';
import Footer from '../../components/Footer';
import SanityService from "../../services/SanityService";

export default function PostAll({ post }) {
  return (
    <div>
      <Header />
      <MainPost post = {post} />
      <PostDetail blocks={post.content} />
      <Footer />
    </div>
    );
};

export async function getStaticPaths() {
  const sanityService = new SanityService();
  const posts = await sanityService.getPosts();
    const paths = posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {

  const { slug } = params; 
  
  const posts = await new SanityService().getPosts();
  const post = posts.find((p) => p.slug === slug);

  return  {
    props: {
      post,
      slug,
    },
  };
}