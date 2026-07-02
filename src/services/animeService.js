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
