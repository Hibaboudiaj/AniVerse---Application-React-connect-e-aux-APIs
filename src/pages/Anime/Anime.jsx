import { useEffect, useState } from "react";

import SearchBar from "../../components/SearchBar/SearchBar";
import AnimeSection from "../../components/AnimeSection/AnimeSection";

import { getAnimeList, searchAnime } from "../../services/animeService";

import styles from "./Anime.module.css";

function Anime() {
  const [animeList, setAnimeList] = useState([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchAnime() {
      try {
        const data = await getAnimeList();

        setAnimeList(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAnime();
  }, []);

  useEffect(() => {
    async function fetchSearch() {
      if (search.trim() === "") {
        const data = await getAnimeList();
        setAnimeList(data);
        return;
      }

      try {
        setLoading(true);

        const data = await searchAnime(search);

        setAnimeList(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    const timer = setTimeout(fetchSearch, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className={styles.container}>
      <h1>Anime Library</h1>

      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />

      <AnimeSection
        title=""
        animes={animeList}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default Anime;
