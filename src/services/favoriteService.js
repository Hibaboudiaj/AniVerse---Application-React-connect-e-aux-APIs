import jsonServer from "../api/jsonServer";

// get all
export async function getFavorites() {
  const response = await jsonServer.get("/favorites");
  return response.data;
}

export async function addFavorite(anime) {
  const response = await jsonServer.post("/favorites", anime);
  return response.data;
}

export async function removeFavorite(id) {
  await jsonServer.delete(`/favorites/${id}`);
}
