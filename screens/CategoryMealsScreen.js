import React from 'react';
import {StyleSheet, Text, View, Button, Platform, FlatList} from 'react-native';

import {CATEGORIES, MEALS} from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam('categoryId');
  const meals = MEALS.filter(item => item.categoryId.indexOf(categoryId) >= 0);

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
  categoriesScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;
