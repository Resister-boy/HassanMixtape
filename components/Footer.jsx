import Link from "next/link";
import styles from '../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return(
    <footer className={styles.container}>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <Link href="https://www.instagram.com/resister_boy/">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>
        <div className={styles.icon}>
          <Link href="https://www.facebook.com/hassan.jaehun/">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
        </div>
        <div className={styles.icon}>
          <Link href="https://www.linkedin.com/in/jaehun-lee-wowman17/">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </div>
      </div>
      <div>
        <p className={styles.copyRight}>ⓒ 2022 Resister-boy. All Rights Reserved.</p>
      </div>
    </footer>
  );
}