import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Anime from "../pages/Anime/Anime";
import AnimeDetails from "../pages/AnimeDetails/AnimeDetails";
import Characters from "../pages/Characters/Characters";
import CharacterDetails from "../pages/CharacterDetails/CharacterDetails";
import Favorites from "../pages/Favorites/Favorites";
import MyLibrary from "../pages/MyLibrary/MyLibrary";
import MyRatings from "../pages/MyRatings/MyRatings";
import AnimeCharacters from "../pages/AnimeCharacters/AnimeCharacters";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/anime/:id" element={<AnimeDetails />} />
        <Route path="/anime/:id/characters" element={<AnimeCharacters />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/my-library" element={<MyLibrary />} />
        <Route path="/my-ratings" element={<MyRatings />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
