import {MEALS} from "../../data/dummy-data";
import {LOAD_FAVORITES, SET_FILTERS, TOGGLE_FAVORITE} from "../actions/meals";
import {toggleFavorites} from "../../shared/MealsService";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FAVORITES: {
      const favorites = state.meals.filter(meal => action.favorites.indexOf(meal.id) >= 0);
      return {...state, favoriteMeals: favorites}
    }

    case TOGGLE_FAVORITE: {
      const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
      let updatedFavoriteMeals = [...state.favoriteMeals];

      if (existingIndex >= 0) {
        updatedFavoriteMeals.splice(existingIndex, 1);
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        updatedFavoriteMeals = state.favoriteMeals.concat(meal);
      }

      toggleFavorites(action.mealId).then(r => console.log('Favorite was toggled on server'));

      return { ...state, favoriteMeals: updatedFavoriteMeals}
    }

    case SET_FILTERS: {
      const filters = action.filters;
      const filteredMeals = state.meals.filter(meal => {
        if (filters.glutenFree && !meal.isGlutenFree) {
          return false;
        }

        if (filters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }

        if (filters.vegan && !meal.isVegan) {
          return false;
        }

        if (filters.vegetarian && !meal.isVegetarian) {
          return false;
        }

        return true;
      });

      return {...state, filteredMeals: filteredMeals};
    }

    default:
      return state;
  }
};

export default mealsReducer;
