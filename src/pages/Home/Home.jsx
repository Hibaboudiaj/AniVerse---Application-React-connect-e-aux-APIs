import Hero from "../../components/Hero/Hero";
import AnimeSection from "../../components/AnimeSection/AnimeSection";
import useAnime from "../../hooks/useAnime";

function Home() {
  const {
    trendingAnime,
    seasonalAnime,
    loading,
    error,
  } = useAnime();

  return (
    <>
      <Hero />

      <AnimeSection
        title="Trending Anime"
        animes={trendingAnime}
        loading={loading}
        error={error}
      />

      <AnimeSection
        title="Seasonal Anime"
        animes={seasonalAnime}
        loading={loading}
        error={error}
      />
    </>
  );
}

export default Home;