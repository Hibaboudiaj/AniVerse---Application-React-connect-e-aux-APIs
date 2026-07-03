import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar, FaHeart, FaPlay } from "react-icons/fa";
import { MdOutlineTv, MdDateRange } from "react-icons/md";

import { getAnimeById } from "../../services/animeService";

import styles from "./AnimeDetails.module.css";

function AnimeDetails() {
  const { id } = useParams();

  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchAnime() {
      try {
        const data = await getAnimeById(id);
        setAnime(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAnime();
  }, [id]);

  if (loading) return <h2 className={styles.message}>Loading...</h2>;

  if (error) return <h2 className={styles.message}>{error}</h2>;

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={anime.images.jpg.large_image_url} alt={anime.title} />
      </div>
      <div className={styles.right}>
        <h1>{anime.title}</h1>

        <div className={styles.stats}>
          <span>
            <FaStar />
            {anime.score || "N/A"}
          </span>

          <span>
            <MdOutlineTv />
            {anime.episodes || "?"} Episodes
          </span>

          <span>
            <MdDateRange />
            {anime.year || "N/A"}
          </span>
        </div>

        <div className={styles.genres}>
          {anime.genres.map((genre) => (
            <span key={genre.mal_id}>{genre.name}</span>
          ))}
        </div>

        <h3>Studios</h3>

        <p>
          {anime.studios.length > 0
            ? anime.studios.map((studio) => studio.name).join(", ")
            : "Unknown"}
        </p>

        <h3>Synopsis</h3>

        <p className={styles.synopsis}>{anime.synopsis}</p>

        <div className={styles.buttons}>
          <button>
            <FaHeart />
            Favorite
          </button>

          {anime.trailer?.url && (
            <a href={anime.trailer.url} target="_blank" rel="noreferrer">
              <FaPlay />
              Watch Trailer
            </a>
          )}

          <Link to={`/anime/${id}/characters`}>View Characters</Link>
        </div>
      </div>
    </div>
  );
}

export default AnimeDetails;
