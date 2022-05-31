import Link from 'next/link';
import styles from '../styles/BlogList.module.css';

export default function BlogList({ posts }) {
  return (
    <>
    <section>
      <h1 className={styles.middle}>Latest Post</h1>
    </section>
    <section className={styles.container}>
    <div className={styles.line}>
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <Link 
              href={`/post/${post.slug}`}>
              <a>
              <div className={styles.contentContainer}>
                <img 
                  className={styles.mainImage}
                  src={post.mainImage.imageUrl} />  
                <div className={styles.preview}>
                  <div className={styles.postInfo}>
                    <b className={styles.title}>{post.title}</b>
                    <b className={styles.subtitle}> · {post.tag}</b>
                  </div>
                  <div className={styles.box}>
                    <img className={styles.profile} src={post.author.image} />
                    <b className={styles.addInfo}>{post.author.name} · {post.createdAt.slice(0, 10)}</b>   
                  </div>
                </div>
              </div>
              </a>
          </Link>
          </div>
        );
      })};
    </div>
    </section>
    </>
  );
}