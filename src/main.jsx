import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import FavoriteProvider from "./context/FavoriteContext/FavoriteProvider";
import AnimeProvider from "./context/AnimeProvider";
import "./styles/globals.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AnimeProvider>
      <FavoriteProvider>
        <App />
      </FavoriteProvider>
    </AnimeProvider>
  </BrowserRouter>,
);
