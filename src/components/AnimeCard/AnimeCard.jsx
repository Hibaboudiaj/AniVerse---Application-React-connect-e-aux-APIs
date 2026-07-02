import styles from "./AnimeCard.module.css";

function AnimeCard({ anime }) {
  return (
    <div className={styles.card}>
      <img
        src={anime.images.jpg.large_image_url}
        alt={anime.title}
      />

      <div className={styles.content}>
        <h3>{anime.title}</h3>

        <span>⭐ {anime.score}</span>
      </div>
    </div>
  );
}

export default AnimeCard;