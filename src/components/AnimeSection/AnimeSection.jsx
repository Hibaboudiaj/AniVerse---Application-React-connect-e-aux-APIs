import AnimeCard from "../AnimeCard/AnimeCard";
import Loading from "../Loading/Loading";
import styles from "./AnimeSection.module.css";

function AnimeSection({
  title,
  animes,
  loading,
  error,
}) {
  if (loading) return <Loading />;

  if (error) return <p>{error}</p>;

  if (animes.length === 0) {
    return <p>No anime found.</p>;
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.grid}>
        {animes.map((anime) => (
          <AnimeCard
            key={anime.mal_id}
            anime={anime}
          />
        ))}
      </div>
    </section>
  );
}

export default AnimeSection;