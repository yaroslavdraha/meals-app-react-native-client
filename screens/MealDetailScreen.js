import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";

import HeaderButton from '../components/HeaderButton';
import {MEALS} from "../data/dummy-data";

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.categoriesScreen}>
      <Text>{selectedMeal.title}</Text>
    </View>
  );
}

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const headerRightButtons = (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title='Favorite' iconName='ios-star' onPress={() => {console.log('Pressed!');}}/>
    </HeaderButtons>
  );

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => headerRightButtons
  }
}

const styles = StyleSheet.create({
  categoriesScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailScreen;
