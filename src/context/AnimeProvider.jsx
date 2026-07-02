import { useEffect, useState } from "react";
import AnimeContext from "./AnimeContext";
import {
  getTrendingAnime,
  getSeasonNow,
} from "../services/animeService";

function AnimeProvider({ children }) {
  const [trendingAnime, setTrendingAnime] = useState([]);
  const [seasonalAnime, setSeasonalAnime] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAnime() {
      try {
        setLoading(true);

        const trending = await getTrendingAnime();
        const seasonal = await getSeasonNow();

        setTrendingAnime(trending);
        setSeasonalAnime(seasonal);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAnime();
  }, []);

  return (
    <AnimeContext.Provider
      value={{
        trendingAnime,
        seasonalAnime,
        loading,
        error,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
}

export default AnimeProvider;