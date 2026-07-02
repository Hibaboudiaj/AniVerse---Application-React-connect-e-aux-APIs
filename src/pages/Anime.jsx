import { useState } from "react";

import AnimeSearch from "../components/AnimeSearch/AnimeSearch";
import AnimeGrid from "../components/AnimeGrid/AnimeGrid";

import animeData from "../data/animeData";

function Anime() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All Genres");

  const filteredAnime = animeData.filter((anime) => {
    const matchSearch = anime.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchGenre = genre === "All Genres" || anime.genre === genre;

    return matchSearch && matchGenre;
  });

  return (
    <main>
      <AnimeSearch
        search={search}
        setSearch={setSearch}
        genre={genre}
        setGenre={setGenre}
      />

      <AnimeGrid animeList={filteredAnime} />
    </main>
  );
}

export default Anime;
