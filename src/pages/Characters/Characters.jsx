import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getTopCharacters } from "../../services/animeService";

import styles from "./Characters.module.css";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const data = await getTopCharacters();
        setCharacters(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCharacters();
  }, []);

  if (loading) return <h2 className={styles.message}>Loading...</h2>;
  if (error) return <h2 className={styles.message}>{error}</h2>;

  return (
    <div className={styles.container}>
      <h1>Top Characters</h1>

      <div className={styles.grid}>
        {characters.map((character) => (
          <Link
            key={character.mal_id}
            to={`/characters/${character.mal_id}`}
            className={styles.card}
          >
            <img
              src={character.images.jpg.image_url}
              alt={character.name}
            />

            <div className={styles.info}>
              <h3>{character.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Characters;