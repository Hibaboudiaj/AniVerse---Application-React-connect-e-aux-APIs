import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
// import Fouter from "./components/Fouter/Fouter";

import Home from "./pages/Home";
import Anime from "./pages/anime";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/characters" element={<h1>Characters</h1>} />
        <Route path="/favorites" element={<h1>Favorites</h1>} />
        <Route path="/my-library" element={<h1>My Library</h1>} />
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
      </Routes>

      {/* <Fouter /> */}
    </>
  );
}

export default App;
