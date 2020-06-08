import {MEALS} from "../../data/dummy-data";
import {LOAD_FAVORITES, SET_FILTERS, TOGGLE_FAVORITE} from "../actions/meals";

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

        fetch('https://meal-app-567fd.firebaseio.com/favoritemeals.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: meal.id
          })
        }).then(r => console.log('added to favorites'));
      }

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
