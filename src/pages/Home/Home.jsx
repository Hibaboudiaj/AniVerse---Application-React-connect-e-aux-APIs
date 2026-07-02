import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import { getTrendingAnime, getSeasonNow } from "../../services/animeService";

function Home() {
  useEffect(() => {
    async function fetchData() {
      try {
        const trending = await getTrendingAnime();
        const seasonal = await getSeasonNow();

        console.log("Trending:", trending);
        console.log("Seasonal:", seasonal);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <Hero />
    </>
  );
}
export default Home;
