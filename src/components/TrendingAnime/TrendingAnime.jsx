import { Link } from "react-router-dom";
import { HiTrendingUp } from "react-icons/hi";
import trendingAnime from "../../data/trendingAnime";
import AnimeCard from "../AnimeCard/AnimeCard";
import styles from "./TrendingAnime.module.css";

function TrendingAnime() {
  return (
    <section className={styles.trending}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.titleWrapper}>
            <div className={styles.icon}>
              <HiTrendingUp />
            </div>

            <div>
              <h2>Trending Anime</h2>
              <p>The most popular series in the global community</p>
            </div>
          </div>

          <Link to="/anime" className={styles.viewAll}>
            VIEW ALL →
          </Link>
        </div>

        <div className={styles.grid}>
          {trendingAnime.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingAnime;