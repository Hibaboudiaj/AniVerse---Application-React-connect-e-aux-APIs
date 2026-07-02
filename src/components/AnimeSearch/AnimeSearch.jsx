import { FiSearch, FiFilter } from "react-icons/fi";
import styles from "./AnimeSearch.module.css";

function AnimeSearch({ genre, setGenre, search, setSearch }) {
  return (
    <section className={styles.searchSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Explore Catalog</h1>

          <p>
            Search, filter, and discover your next binge-worthy anime series.
          </p>
        </div>

        <div className={styles.searchBox}>
          <div className={styles.searchBar}>
            <div className={styles.inputWrapper}>
              <FiSearch className={styles.searchIcon} />

              <input
                type="text"
                placeholder="Search anime title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <button>Search</button>
          </div>

          <div className={styles.filters}>
            <div className={styles.leftFilters}>
              <span className={styles.filterTitle}>
                <FiFilter />
                Filters :
              </span>

              <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                <option>All Genres</option>
                <option>Action</option>
                <option>Comedy</option>
                <option>Drama</option>
                <option>Fantasy</option>
                <option>Romance</option>
                <option>Sci-Fi</option>
              </select>

              <select>
                <option>All Formats</option>
                <option>TV</option>
                <option>Movie</option>
                <option>OVA</option>
                <option>ONA</option>
              </select>
            </div>

            <select className={styles.sort}>
              <option>Most Popular</option>
              <option>Highest Rated</option>
              <option>Newest</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnimeSearch;
