import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiPlay,
  FiUsers,
  FiHeart,
  FiBookOpen,
  FiGrid,
} from "react-icons/fi";

import styles from "./Header.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h2 className={styles.logo}>
          アニ<span>バース</span>
        </h2>

        <nav>
          <ul className={styles.nav}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.link} ${styles.active}`
                    : styles.link
                }
              >
                <FiHome />
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/anime"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.link} ${styles.active}`
                    : styles.link
                }
              >
                <FiPlay />
                Anime
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/characters"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.link} ${styles.active}`
                    : styles.link
                }
              >
                <FiUsers />
                Characters
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.link} ${styles.active}`
                    : styles.link
                }
              >
                <FiHeart />
                Favorites
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/my-library"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.link} ${styles.active}`
                    : styles.link
                }
              >
                <FiBookOpen />
                My Library
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.link} ${styles.active}`
                    : styles.link
                }
              >
                <FiGrid />
                Dashboard
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}