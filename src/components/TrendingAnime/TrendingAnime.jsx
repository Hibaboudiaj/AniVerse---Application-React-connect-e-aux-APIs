import { Link } from "react-router-dom";
import { HiTrendingUp } from "react-icons/hi";
import trendingAnime from "../../data/trendingAnime";
import AnimeCard from "../AnimeCard/AnimeCard";
import styles from "./TrendingAnime.module.css";
import Section from "../layoute/Section";

function TrendingAnime() {
  return (
    <Section>
      {trendingAnime.map((anime) => (
        <AnimeCard key={anime.id} anime={anime} />
      ))}
    </Section>
          
  );
}

export default TrendingAnime;