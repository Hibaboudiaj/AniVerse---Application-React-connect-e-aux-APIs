import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AnimeProvider from "./context/AnimeProvider";
import "./styles/globals.css"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AnimeProvider>
      <App />
    </AnimeProvider>
  </BrowserRouter>
);