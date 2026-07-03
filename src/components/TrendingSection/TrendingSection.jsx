import AnimeCard from "../AnimeCard/AnimeCard";
import Loading from "../Loading/Loading";
import useAnime from "../../hooks/useAnime";

import styles from "./TrendingSection.module.css";

import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

function TrendingSection() {
  const { trendingAnime, loading, error } = useAnime();

  if (loading) return <Loading />;

  if (error) return <p>{error}</p>;

  return (
    <section className={styles.section}>
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
        {trendingAnime.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </section>
  );
}

export default TrendingSection;
