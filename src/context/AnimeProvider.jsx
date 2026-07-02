import { useEffect, useState } from "react";
import AnimeContext from "./AnimeContext";

import { getTrendingAnime, getSeasonNow } from "../services/animeService";

function AnimeProvider({ children }) {
  const [trendingAnime, setTrendingAnime] = useState([]);
  const [seasonalAnime, setSeasonalAnime] = useState([]);

  useEffect(() => {
    async function fetchAnime() {
      try {
        const trending = await getTrendingAnime();
        const seasonal = await getSeasonNow();

        setTrendingAnime(trending);
        setSeasonalAnime(seasonal);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAnime();
  }, []);
  return (
    <AnimeContext.Provider value={{ trendingAnime, seasonalAnime }}>
      {children}
    </AnimeContext.Provider>
  );
}
export default AnimeProvider;
