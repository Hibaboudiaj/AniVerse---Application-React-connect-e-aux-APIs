import { FaHeart, FaStar } from "react-icons/fa";
import { MdOutlineTv } from "react-icons/md";

import useFavorite from "../../hooks/useFavorite";

import styles from "./FavoriteCard.module.css";

function FavoriteCard({ anime }) {
  const { removeFromFavorites } = useFavorite();

  async function handleRemove() {
    await removeFromFavorites(anime.id);
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={anime.image}
          alt={anime.title}
        />

        <button
          className={styles.favorite}
          onClick={handleRemove}
        >
          <FaHeart />
        </button>

        <span className={styles.score}>
          <FaStar />
          {anime.score || "N/A"}
        </span>
      </div>

      <div className={styles.info}>
        <h3>{anime.title}</h3>

        <div className={styles.meta}>
          <span>
            <MdOutlineTv />
            {anime.episodes || "?"} eps
          </span>

          <span>{anime.year || "N/A"}</span>
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;