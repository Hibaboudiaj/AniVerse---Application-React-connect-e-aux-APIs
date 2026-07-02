import { useContext } from "react";
import AnimeContext from "../context/AnimeContext";

function useAnime() {
  return useContext(AnimeContext);
}
export default useAnime;
