import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MealList from "../components/MealList";

import {MEALS} from "../data/dummy-data";
import {HeaderButton, HeaderButtons, Item} from "react-navigation-header-buttons";
import CategoriesScreen from "./CategoriesScreen";

const FavoritesScreen = props => {

  const favoriteMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

  return (
    <View style={styles.categoriesScreen}>
      <MealList meals={favoriteMeals} navigation={props.navigation}/>
    </View>
  );
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: "Favorites",
    headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Menu" iconName="ios-menu" onPress={() => {
        navData.navigation.toggleDrawer();
      }}/>
    </HeaderButtons>
  }
};

const styles = StyleSheet.create({
  categoriesScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen;
