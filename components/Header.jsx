import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header 
      className={styles.header}>
      <div className={styles.title}>
        <Link href="/">
          <img
            className={styles.logo}
            src="/src/Logo.png" 
            alt="" 
            width="250"
          />
        </Link>
        </div>
        <div className={styles.category}>
          <div>
            <Link href="/startup/">
              Startup
            </Link>
          </div>
          <div>
            <Link href="/investment/">
              Investment
            </Link>
          </div> 
          <div>
            <Link href="/programming/">
              Programming
            </Link>
          </div>
          <div>
            <Link href="/blogkchain/">
              Blockchain
            </Link>
          </div>
          <div>
            <Link href="/life/">
              Life
            </Link>
          </div>
        </div>
    </header>
  )
}

