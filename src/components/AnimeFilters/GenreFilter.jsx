import styles from "./GenreFilter.module.css";

function GenreFilter({ genres, value, onChange }) {
  return (
    <select className={styles.select} value={value} onChange={onChange}>
      <option value="">All Genres</option>
      {genres.map((genre) => (
        <option key={genre.mal_id} value={genre.mal_id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
}
export default GenreFilter;