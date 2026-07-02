import { Link } from "react-router-dom";
import AnimeCard from "../AnimeCard/AnimeCard";
import styles from "./AnimeSection.module.css";

function AnimeSection({
  title,
  subtitle,
  icon,
  buttonText,
  buttonLink,
  animeList,
}) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.titleWrapper}>
            <div className={styles.icon}>{icon}</div>

            <div>
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </div>
          </div>

          <Link to={buttonLink} className={styles.viewAll}>
            {buttonText} →
          </Link>
        </div>

        <div className={styles.grid}>
          {animeList.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AnimeSection;
