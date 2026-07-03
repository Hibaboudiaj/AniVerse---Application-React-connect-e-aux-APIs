import { Link } from "react-router-dom";
import {
  FaHeart,
  FaStar,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { MdOutlineTv } from "react-icons/md";

import styles from "./AnimeCard.module.css";

function AnimeCard({ anime }) {
  const {
    mal_id,
    title,
    score,
    type,
    episodes,
    year,
    images,
  } = anime;

  return (
    <Link
      to={`/anime/${mal_id}`}
      className={styles.card}
    >
      <div className={styles.imageContainer}>
        <img
          src={images.jpg.large_image_url}
          alt={title}
        />

        <span className={styles.type}>
          {type}
        </span>

        <button
          className={styles.favorite}
          onClick={(e) => e.preventDefault()}
        >
          <FaHeart />
        </button>

        <span className={styles.score}>
          <FaStar />
          {score || "N/A"}
        </span>
      </div>

      <div className={styles.info}>
        <h3>{title}</h3>

        <div className={styles.meta}>
          <span>
            <MdOutlineTv />
            {episodes || "?"} eps
          </span>

          <span>
            <FaRegCalendarAlt />
            {year || "N/A"}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default AnimeCard;