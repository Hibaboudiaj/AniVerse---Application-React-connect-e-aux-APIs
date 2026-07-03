import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { getCharacterById } from "../../services/animeService";

import styles from "./CharactersDetails.module.css";

function CharacterDetails() {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCharacter() {
      try {
        const data = await getCharacterById(id);
        setCharacter(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCharacter();
  }, [id]);

  if (loading) return <h2 className={styles.message}>Loading...</h2>;
  if (error) return <h2 className={styles.message}>{error}</h2>;

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={character.images.jpg.image_url} alt={character.name} />
      </div>

      <div className={styles.right}>
        <h1>{character.name}</h1>

        <h3>About</h3>

        <p className={styles.about}>
          {character.about || "No description available."}
        </p>

        <h3>Anime Appearances</h3>

        <div className={styles.animeGrid}>
          {character.anime?.slice(0, 12).map((item) => (
            <Link
              key={item.anime.mal_id}
              to={`/anime/${item.anime.mal_id}`}
              className={styles.animeCard}
            >
              <img
                src={item.anime.images.jpg.image_url}
                alt={item.anime.title}
              />

              <span>{item.anime.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default CharacterDetails;