import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import MealItem from "./MealItem";
import {useSelector} from "react-redux";

const MealList = props => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  const renderMealItem = itemData => {
    const isFavorite = favoriteMeals.find(meal => meal.id === itemData.item.id);

    return (
      <MealItem
        meal={itemData.item}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFavorite
            }
          })
        }}
      />
    )
  };

  return (
    <View style={styles.categoriesScreen}>
      <FlatList data={props.meals} keyExtraktor={item => item.id}
                styles={{width: '100%'}}
                renderItem={renderMealItem}/>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealList;
