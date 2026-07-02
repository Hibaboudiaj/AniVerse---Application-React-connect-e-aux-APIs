import AnimeSearch from "../components/AnimeSearch/AnimeSearch";
import AnimeGrid from "../components/AnimeGrid/AnimeGrid";

import animeData from "../data/animeData";

function Anime() {
  return (
    <main>
      <AnimeSearch />
      <AnimeGrid animeList={animeData} />
    </main>
  );
}
export default Anime;