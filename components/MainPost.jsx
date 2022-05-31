import styles from '../styles/MainPost.module.css';

export default function MainPost({ post }) {

  return (
    <>
      <section className={styles.container}>
         <div className={styles.contentContainer}>
           <img 
            className={styles.mainImage}
            src={post.mainImage.imageUrl} 
              />  
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
      </section>
    </>

  );
} 
