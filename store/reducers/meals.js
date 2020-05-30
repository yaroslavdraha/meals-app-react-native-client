import {MEALS} from "../../data/dummy-data";
import {SET_FILTERS, TOGGLE_FAVORITE} from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);

      if (existingIndex >= 0) {
        const updatedFavoriteMeals = [...state.favoriteMeals];
        updatedFavoriteMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavoriteMeals}
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        return {...state, favoriteMeals: state.favoriteMeals.concat(meal)}
      }

    case SET_FILTERS:
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

    default:
      return state;
  }
};

export default mealsReducer;
