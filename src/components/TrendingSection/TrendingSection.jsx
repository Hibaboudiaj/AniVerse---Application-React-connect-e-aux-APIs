import AnimeCard from "../AnimeCard/AnimeCard";
import Loading from "../Loading/Loading";
import useAnime from "../../hooks/useAnime";

import styles from "./TrendingSection.module.css";

function TrendingSection() {
  const { trendingAnime, loading, error } = useAnime();

  if (loading) return <Loading />;

  if (error) return <p>{error}</p>;

  return (
    <section className={styles.section}>
      <h2>Trending Anime</h2>

      <div className={styles.grid}>
        {trendingAnime.map((anime) => (
          <AnimeCard
            key={anime.mal_id}
            anime={anime}
          />
        ))}
      </div>
    </section>
  );
}

export default TrendingSection;