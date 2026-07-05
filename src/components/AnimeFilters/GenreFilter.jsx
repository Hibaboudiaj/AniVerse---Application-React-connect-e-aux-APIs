import styles from "./GenreFilter.module.css";
import { FiFilter } from "react-icons/fi";

function GenreFilter({ genres, value, onChange }) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>
        <FiFilter />
        Filters :
      </span>

      <select className={styles.select} value={value} onChange={onChange}>
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre.mal_id} value={genre.mal_id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
}
export default GenreFilter;
