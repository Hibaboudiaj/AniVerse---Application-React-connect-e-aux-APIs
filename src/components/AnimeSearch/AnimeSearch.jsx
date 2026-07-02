import { FiSearch, FiFilter } from "react-icons/fi";
import styles from "./AnimeSearch.module.css";

function AnimeSearch() {
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

              <input type="text" placeholder="Search anime title..." />
            </div>

            <button>Search</button>
          </div>

          <div className={styles.filters}>
            <div className={styles.leftFilters}>
              <span className={styles.filterTitle}><FiFilter />Filters :
              </span>

              <select>
                <aption>All Genres</aption>
              </select>

              <select>
                <option>All Formats</option>
              </select>
            </div>

            <select className={styles.sort}>
              <option>Most Popular</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AnimeSearch;
