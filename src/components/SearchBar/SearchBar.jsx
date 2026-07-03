import { FiSearch } from "react-icons/fi";
import styles from "./SearchBar.module.css";

function SearchBar({ value, onChange }) {
  return (
    <div className={styles.search}>
      <FiSearch className={styles.icon} />

      <input
        type="text"
        placeholder="Search anime..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;