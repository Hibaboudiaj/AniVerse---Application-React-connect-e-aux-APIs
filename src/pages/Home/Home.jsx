import Hero from "../../components/Hero/Hero";
import useAnime from "../../hooks/useAnime";

function Home() {
  const { trendingAnime, seasonalAnime } = useAnime();

  console.log(trendingAnime);
  console.log(seasonalAnime);
  
  return <Hero />;
}
export default Home;
