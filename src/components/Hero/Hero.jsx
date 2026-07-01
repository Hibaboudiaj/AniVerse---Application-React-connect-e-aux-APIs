import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.topline}></div>

      <div className={styles.bottomLine}></div>

      <div className={styles.glow}></div>

      <div className={styles.overlay}></div>

      <div className={styles.japaneseText}>
        <span>傑作</span>
        <span>探索</span>
      </div>

      <div className={styles.content}>
        <div className={styles.topContent}>
          <span className={styles.subtitle}>これは何ですか • アニメ宇宙</span>

          <div className={styles.status}>
            <span className={styles.dot}></span>
            <span>  NOW LIVE & EXPLORABLE</span>
          </div>
        </div>

        <div className={styles.heading}>
          <h2>DISCOVER THE</h2>
          <h1>NEXT MASTERPIECE</h1>
        </div>

        <p className={styles.description}>
          Step into AniVerse, a minimalist space designed for anime purists.
          Streamline your discovery, rate individual series, log episodes, and
          design your perfect virtual library catalog.
        </p>

        <div className={styles.buttonContainer}>
          <Link to="/anime" className={styles.button}>
            Explore Anime
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Hero;
