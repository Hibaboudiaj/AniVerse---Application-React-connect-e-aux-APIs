import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getAnimeCharacters } from "../../services/animeService";

import styles from "./AnimeCharacters.module.css";

function AnimeCharacters() {
  const { id } = useParams();

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const data = await getAnimeCharacters(id);
        setCharacters(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCharacters();
  }, [id]);

  if (loading) return <h2 className={styles.message}>Loading...</h2>;
  if (error) return <h2 className={styles.message}>{error}</h2>;

  return (
    <div className={styles.container}>
      <h1>Anime Characters</h1>

      <div className={styles.grid}>
        {characters.map((item) => (
          <Link
            key={item.character.mal_id}
            to={`/characters/${item.character.mal_id}`}
            className={styles.card}
          >
            <img
              src={item.character.images.jpg.image_url}
              alt={item.character.name}
            />

            <div className={styles.info}>
              <h3>{item.character.name}</h3>
              <p>{item.role}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AnimeCharacters;