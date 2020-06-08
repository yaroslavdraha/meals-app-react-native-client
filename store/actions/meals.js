export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';
export const LOAD_FAVORITES = 'LOAD_FAVORITES';

export const loadFavorites = () => {
  return async dispatch => {
    const response = await fetch('https://meal-app-567fd.firebaseio.com/favoritemeals.json');
    const favoritesResponse = await response.json();

    const favoriteMeals = [];
    for (const key in favoritesResponse) {
      favoriteMeals.push(favoritesResponse[key]['id'])
    }

    dispatch({
      type: LOAD_FAVORITES,
      favorites: favoriteMeals
    })
  }
};

export const toggleFavorite = id => {
  return {
    type: TOGGLE_FAVORITE,
    mealId: id
  }
};

export const setFilter = filterSettings => {
  return {
    type: SET_FILTERS,
    filters: filterSettings
  }
};
