import {apiUrl} from '../config';

const favoritesEndpoint = apiUrl + 'favoritemeals.json';

export const getFavorites = async () => {
  const response = await fetch(favoritesEndpoint);
  return await response.json();
}

export const toggleFavorites = async (mealId) => {
  const favoriteItem = await getById(mealId);

  return !!Object.keys(favoriteItem).length
    ? removeFavorite(favoriteItem)
    : addFavorite(mealId)
}

const getById = async (mealId) => {
  const queryParams = `orderBy="id"&equalTo="${mealId}"`;
  const url = favoritesEndpoint + `/?${queryParams}`;

  const response = await fetch(url);
  return await response.json();
}

const addFavorite = async (mealId) => {
  await fetch(favoritesEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: mealId
    })
  });
}

const removeFavorite = async (favoriteItem) => {
  const url = apiUrl + 'favoritemeals/' + Object.keys(favoriteItem)[0] + '.json'
  await fetch(url, {
    method: 'DELETE'
  });
}