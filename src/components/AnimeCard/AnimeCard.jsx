import {
  FaHeart,
  FaStar,
  FaRegCalendarAlt,
} from "react-icons/fa";

import { MdOutlineTv } from "react-icons/md";

import styles from "./AnimeCard.module.css";

function AnimeCard({ anime }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={anime.image} alt={anime.title} />

        <span className={styles.type}>
          {anime.type}
        </span>

        <button className={styles.favorite}>
          <FaHeart />
        </button>

        <span className={styles.score}>
          <FaStar />
          {anime.score}
        </span>
      </div>

      <div className={styles.info}>
        <h3>{anime.title}</h3>

        <div className={styles.meta}>
          <span>
            <MdOutlineTv />
            {anime.episodes} eps
          </span>

          <span>
            <FaRegCalendarAlt />
            {anime.year}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;