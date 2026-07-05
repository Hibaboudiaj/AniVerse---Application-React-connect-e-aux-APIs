import { FaHeart } from "react-icons/fa";

import useFavorite from "../../hooks/useFavorite";

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
              A persistent collection of your absolute favorite anime
              series.
            </p>
          </div>
        </div>

        <div className={styles.total}>
          <span>TOTAL SAVED :</span>

          <strong>{favorites.length}</strong>
        </div>
      </div>
    </div>
  );
}

export default Favorites;