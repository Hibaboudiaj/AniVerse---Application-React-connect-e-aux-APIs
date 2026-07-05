import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import useFavorite from "../../hooks/useFavorite";
import FavoriteCard from "../../components/FavoriteCard/FavoriteCard";

import styles from "./Favorites.module.css";

function Favorites() {
  const { favorites } = useFavorite();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.icon}>
            <FaHeart />
          </div>

          <div>
            <h1>My Favorites</h1>

            <p>
              A persistent collection of your absolute favorite anime series.
            </p>
          </div>
        </div>

        <div className={styles.total}>
          <span>TOTAL SAVED :</span>
          <strong>{favorites.length}</strong>
        </div>
      </div>

      {favorites.length === 0 ? (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>
            <FaHeart />
          </div>

          <h2>Your Favorites is Empty</h2>

          <p>
            When browsing the anime catalog, click the heart icon on any
            series to save it here for quick access.
          </p>

          <Link to="/anime" className={styles.button}>
            Discover Anime
          </Link>
        </div>
      ) : (
        <div className={styles.grid}>
          {favorites.map((anime) => (
            <FavoriteCard
              key={anime.id}
              anime={anime}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;