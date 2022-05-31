import styles from '../styles/Section.module.css';
import Link from 'next/link';

export default function Section({ slug, _id, mainImage, title, tag, author, createdAt }) {

  return (
    <section className={styles.container}>
      <div className={styles.screen}>
        <div className={styles.text}>
        <h1 className={styles.paragraph}>
          <span className={styles.name}>Resister-boy<br /></span>
          <span className={styles.sentence}>Thinking about Startup, Investment,<br/></span>
          <span className={styles.sentence}>Technology, Blockchain and Life.</span>
        </h1>
        <p>
          {`스티브 잡스, 아인슈타인, 체 게바라를 좋아하고 존경합니다. `}
        </p>
        <p> 
          {`인생을 걸 수 있는 일을 찾아 헌신하고, 사람들에게 기억되는 삶을 살고 싶습니다. `}
        </p>
        <p>{`하루하루 공부하고, 사람들을 만나고, 스스로를 돌아보며 성장하고 있습니다.`}</p>
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
