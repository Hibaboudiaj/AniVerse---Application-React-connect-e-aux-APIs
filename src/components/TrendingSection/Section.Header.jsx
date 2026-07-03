import styles from "./TrendingSection.module.css";
import { Link } from "react-router-dom";

export default function SectionHeader({ title, subTitle, icon }) {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.icon}>{icon}</div>

        <div>
          <h2>{title}</h2>
          <p>{subTitle}</p>
        </div>
      </div>

      <Link to="/anime" className={styles.link}>
        VIEW ALL →
      </Link>
    </div>
  );
}
