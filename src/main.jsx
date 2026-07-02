import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import AnimeProvider from "./context/AnimeProvider";

import "./styles/globals.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AnimeProvider>
        <App />
      </AnimeProvider>
    </BrowserRouter>
  </StrictMode>,
);
