import { useEffect, useState } from "react";

import FavoriteContext from "./FavoriteContext";

import {
  getFavorites,
  addFavorite,
} from "../../services/favoriteService";

function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  async function loadFavorites() {
    try {
      const data = await getFavorites();
      setFavorites(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function addToFavorites(anime) {
    await addFavorite(anime);
    loadFavorites();
  }

  async function deleteFavorite(id) {
    await removeFavorite(id);
    loadFavorites();
  }

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addToFavorites,
        deleteFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
export default FavoriteProvider;
