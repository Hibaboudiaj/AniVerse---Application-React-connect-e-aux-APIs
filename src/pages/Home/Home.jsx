import Hero from "../../components/Hero/Hero";
import AnimeSection from "../../components/AnimeSection/AnimeSection";

import { HiTrendingUp } from "react-icons/hi";
import { LuCalendarDays } from "react-icons/lu";

import trendingAnime from "../data/trendingAnime";
import seasonalAnime from "../data/seasonalAnime";

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

      <AnimeSection
      title="Seasonal Anime"
      subtitle="The hottest series airing in the current season"
      icon={<LuCalendarDays />}
      buttonText="VIEW SEASON"
      buttonLink="/anime"
      animeList={seasonalAnime}
      />
    </>
  );
}
export default Home;
