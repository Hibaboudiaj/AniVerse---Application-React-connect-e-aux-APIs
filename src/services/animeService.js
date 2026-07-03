import api from "../api/axios";

export async function getTrendingAnime() {
  const response = await api.get("/top/anime?limit=6");

  return response.data.data;
}

export async function getSeasonNow() {
  const response = await api.get("/seasons/now?limit=6");

  return response.data.data;
}

export async function getAnimeById(id) {
  const response = await api.get(`/anime/${id}/full`);

  return response.data.data;
}

export async function getAnimeList(search = "", genre = "") {
  const response = await api.get("/anime", {
    params: {
      q: search || undefined,
      genres: genre || undefined,
      limit: 24,
    },
  });

  return response.data.data;
}

export async function getGenres() {
  const response = await api.get("/genres/anime");

  return response.data.data;
}

export async function getAnimeCharacters(id) {
  const response = await api.get(`/anime/${id}/characters`);

  return response.data.data;
}
