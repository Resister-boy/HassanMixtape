import styles from '../styles/PostDetail.module.css';
import BlockContent from '@sanity/block-content-to-react'
import { env } from 'process';


const serializers = {
  type: {
    video: ({ node }) => {
      return <p>video</p>;
    },
    link: ({ node }) => {
      return <p>link</p>;
    },
    imageGallery: ({ node }) => {
      return <p>imageGallery</p>;
    },
  },
};

export default function PostDetail({ blocks }) {

  return (
    <>
    <div className={styles.container}>
      <BlockContent 
          className={styles.area}
          blocks={blocks}
          projectId={process.env.SANITY_PROJECT_ID}   
          dataset="production" 
          serializers={serializers}
          />
    </div>
    </>
  );
}