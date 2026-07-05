import { useEffect, useState } from "react";

import SearchBar from "../../components/AnimeFilters/SearchBar";
import GenreFilter from "../../components/AnimeFilters/GenreFilter";
import AnimeSection from "../../components/AnimeSection/AnimeSection";

import { getAnimeList, getGenres } from "../../services/animeService";

import styles from "./Anime.module.css";


function Anime() {
  const [animeList, setAnimeList] = useState([]);

  const [search, setSearch] = useState("");

  const [genres, setGenres] = useState([]);

  const [selectedGenre, setSelectedGenre] = useState("");

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
    async function fetchAnime() {
      try {
        setLoading(true);

        const data = await getAnimeList(search, selectedGenre);

        setAnimeList(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    const timer = setTimeout(fetchAnime, 500);

    return () => clearTimeout(timer);
  }, [search, selectedGenre]);

  useEffect(() => {
    async function fetchGenres() {
      try {
        const data = await getGenres();

        setGenres(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchGenres();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Anime Library</h1>
      <div className={styles.filtersBox}>
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      
      <div className={styles.filters}>
      <GenreFilter
        genres={genres}
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      />
      </div>

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
