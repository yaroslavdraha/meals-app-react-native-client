import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from "react-redux";

import {CATEGORIES} from "../data/dummy-data";
import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

const CategoryMealsScreen = props => {
  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const categoryId = props.navigation.getParam('categoryId');
  const meals = availableMeals.filter(item => item.categoryId.indexOf(categoryId) >= 0);

  if (!meals.length) {
    return (
      <View style={styles.mealsNotFoundWrapper}>
        <DefaultText>Not meas has been found, check your filters</DefaultText>
      </View>
    );
  }

  return (
    <MealList meals={meals} navigation={props.navigation}/>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const category = CATEGORIES.find(item => item.id === categoryId);

  return {
    headerTitle: category.title
  }
};

const styles = StyleSheet.create({
  mealsNotFoundWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;
