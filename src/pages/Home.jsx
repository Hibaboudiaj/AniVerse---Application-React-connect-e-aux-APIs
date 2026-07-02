import Hero from "../components/Hero/Hero";
import AnimeSection from "../components/AnimeSection/AnimeSection";

import { HiTrendingUp } from "react-icons/hi";

import trendingAnime from "../data/trendingAnime";

function Home() {
  return (
    <>
      <Hero />

      <AnimeSection 
      title="Trending Anime"
      subtitle="The most popular series in the global community"
      icon={<HiTrendingUp />}
      buttonText="VIEW ALL"
      buttonLink="/anime"
      animeList={trendingAnime}
      />
    </>
  );
}
export default Home;
