import styles from '../styles/Section.module.css';
import quotes from '../services/quotes'
import Link from 'next/link';

export default function Section({ slug, _id, mainImage, title, tag, author, createdAt }) { 
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <section className={styles.container}>
      <div className={styles.screen}>
        <div className={styles.text}>
        <h1 className={styles.paragraph}>
          <span className={styles.name}>Resister-boy<br /></span>
          <span className={styles.sentence}>Thinking about Startup, Investment,<br/></span>
          <span className={styles.sentence}>Technology, Blockchain and Life.</span>
        </h1>
        <div className={styles.quotebox}>      
          <p className={styles.quote}>{randomQuote.quote}</p>
          <p className={styles.person}> - {randomQuote.person}</p></div>
        </div>
        <Link 
          key={_id} 
          href={`/post/${slug}`}>
          <a>
            <div className={styles.contentContainer}>
                <img 
                  className={styles.mainImage}
                  src={mainImage.imageUrl} 
                  />  
                <div className={styles.preview}>
                  <div className={styles.postInfo}>
                    <b className={styles.title}>{title}</b>
                    <b className={styles.subtitle}> · {tag}</b>
                  </div>
                  <div className={styles.box}>
                    <img className={styles.profile} src={author.image} />
                    <b className={styles.addInfo}>{author.name} · {createdAt.slice(0, 10)}</b>   
                  </div>
                </div>
            </div>
          </a>
        </Link>
      </div>
    </section>
  )
} 
