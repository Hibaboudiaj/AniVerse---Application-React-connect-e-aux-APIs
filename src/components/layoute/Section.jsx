// import Header from "../Utils/Header";

import { HiTrendingUp } from "react-icons/hi";
import { Link } from "react-router-dom";

function Section({children}) {
  return (
      <section className={styles.trending}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.titleWrapper}>
            <div className={styles.icon}>
              <HiTrendingUp />
            </div>

            <div>
              <h2>Trending Anime</h2>
              <p>The most popular series in the global community</p>
            </div>
          </div>

          <Link to="/anime" className={styles.viewAll}>
            VIEW ALL →
          </Link>
        </div>

        <div className={styles.grid}>
          {children}
        </div>
      </div>
    </section>
  );
}
export default Section;
