import Hero from "../../components/Hero/Hero";
import AnimeSection from "../../components/AnimeSection/AnimeSection";
import useAnime from "../../hooks/useAnime";
import { FaArrowTrendUp } from "react-icons/fa6";
import SectionHeader from "../../components/TrendingSection/Section.Header";
import { CiCalendar } from "react-icons/ci";

function Home() {
  const { trendingAnime, seasonalAnime, loading, error } = useAnime();

  return (
    <>
      <Hero />
      <SectionHeader
        title="Trending Anime"
        subTitle="The most popular series in the global community"
        icon={<FaArrowTrendUp />}
      />
      <AnimeSection animes={trendingAnime} loading={loading} error={error} />
      <SectionHeader
        title="Seasonal Anime"
        subTitle="The most popular series in the global community"
        icon={<CiCalendar />}
      />
      <AnimeSection animes={seasonalAnime} loading={loading} error={error} />
    </>
  );
}

export default Home;
