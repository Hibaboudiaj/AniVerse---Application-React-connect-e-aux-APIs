import styles from "./AnimeGrid.module.css";
import AnimeCard from "../AnimeCard/AnimeCard";

function AnimeGrid({ animeList }) {
  return (
    <section className={styles.gridSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {animeList.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default AnimeGrid;
