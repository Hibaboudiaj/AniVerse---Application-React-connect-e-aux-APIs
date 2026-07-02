import api from "../api/axios";
export async function getAnimeCharacters(id) {
  const response = await api.get(`/anime/${id}/characters`);

  return response.data.data;
}