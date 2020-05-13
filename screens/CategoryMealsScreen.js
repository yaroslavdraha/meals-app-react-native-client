import React from 'react';
import {StyleSheet, Text, View, Button, Platform, FlatList} from 'react-native';

import {CATEGORIES, MEALS} from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam('categoryId');

  const meals = MEALS.filter(item => item.categoryId.indexOf(categoryId) >= 0);

  const renderMealItem = itemData => {
    return (
      <MealItem
        meal={itemData.item}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemData.item.id
            }
          })
        }}
      />
    )
  }

  return (
    <View style={styles.categoriesScreen}>
      <FlatList data={meals} keyExtraktor={item => item.id}
                styles={{width: '100%'}}
                renderItem={renderMealItem}/>
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
