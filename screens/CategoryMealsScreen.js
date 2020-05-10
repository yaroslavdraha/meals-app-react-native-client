import React from 'react';
import {StyleSheet, Text, View, Button, Platform} from 'react-native';

import {CATEGORIES} from "../data/dummy-data";

const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam('categoryId');
  const category = CATEGORIES.find(item => item.id === categoryId);

  return (
    <View style={styles.categoriesScreen}>
      <Text>{category.title}</Text>
      <Button title="Go to Meal Detail screen!" onPress={() => props.navigation.navigate('MealDetail')}/>
      <Button title="Go back" onPress={() => props.navigation.pop()}/>
    </View>
  );
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const category = CATEGORIES.find(item => item.id === categoryId);

  return {
    headerTitle: category.title
  }
}

const styles = StyleSheet.create({
  categoriesScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;
