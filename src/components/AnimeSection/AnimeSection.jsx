import { FaArrowTrendUp } from "react-icons/fa6";
import AnimeCard from "../AnimeCard/AnimeCard";
import Loading from "../Loading/Loading";
import styles from "./AnimeSection.module.css";
import { Link } from "react-router-dom";

function AnimeSection({ title, animes, loading, error }) {
  if (loading) return <Loading />;

  if (error) return <p>{error}</p>;

  if (animes.length === 0) {
    return <p>No anime found.</p>;
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.icon}>
            <FaArrowTrendUp />
          </div>

          <div>
            <h2>Trending Anime</h2>
            <p>The most popular series in the global community</p>
          </div>
        </div>

        <Link to="/anime" className={styles.link}>
          VIEW ALL →
        </Link>
      </div>

      <div className={styles.grid}>
        {animes.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </section>
  );
}

export default AnimeSection;
