// app/page.tsx
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.initials}>TJ</div>
        <main>
          <header className={styles.header}>
            <h1 className={styles.title}>TRISHALA JAIN</h1>
            <p className={styles.tagline}>
              I build communication tools, support personal brand creation, and ship human-centric products.
            </p>
          </header>
          <div className={styles.mainContent}>
            <div className={styles.contact}>
              <p>
                Feel free to reach out!
                <br />
                trishala [@] berkeley.edu
              </p>
            </div>
            <div className={styles.links}>
              <div className={styles.linkItemWrapper}>
                <div className={styles.linkItem}>
                  <a href="https://oratoraai.com" target="_blank" rel="noopener noreferrer">
                    Oratora
                  </a>
                  <p className={styles.linkDescription}>an AI-powered enterprise LMS</p>
                </div>
                <div className={`${styles.line} ${styles.line1}`}></div>
              </div>
              <div className={styles.linkItemWrapper}>
                <div className={styles.linkItem}>
                  <a href="/case-studies" target="_blank" rel="noopener noreferrer">
                    Case Studies
                  </a>
                  <p className={styles.linkDescription}>of a product manager</p>
                </div>
                <div className={`${styles.line} ${styles.line2}`}></div>
              </div>
              <div className={styles.linkItemWrapper}>
                <div className={styles.linkItem}>
                  <a href="/crato" target="_blank" rel="noopener noreferrer">
                    Crato
                  </a>
                  <p className={styles.linkDescription}>a capstone project agency</p>
                </div>
                <div className={`${styles.line} ${styles.line3}`}></div>
              </div>
              <div className={styles.linkItemWrapper}>
                <div className={styles.linkItem}>
                  <a href="/blog" target="_blank" rel="noopener noreferrer">
                    Knick Knacks
                  </a>
                  <p className={styles.linkDescription}>a personal blog</p>
                </div>
                <div className={`${styles.line} ${styles.line4}`}></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}