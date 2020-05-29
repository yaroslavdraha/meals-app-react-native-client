import React from 'react';
import {StyleSheet, Text, View, Button, FlatList, Touchable, TouchableOpacity, Platform} from 'react-native';
import {HeaderButton, HeaderButtons, Item} from 'react-navigation-header-buttons';

import {CATEGORIES} from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import MealItem from "../components/MealItem";



const CategoriesScreen = props => {

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


  const renderGridItem = (listItem) => {
    return (
      <CategoryGridTile
        title={listItem.item.title}
        color={listItem.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: listItem.item.id
            }
          })
        }}
      />
    )
  }

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = navData => {
  return {
    headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Menu" iconName="ios-menu" onPress={() => {
        navData.navigation.toggleDrawer();
      }}/>
    </HeaderButtons>
  }
};

const styles = StyleSheet.create({
});

export default CategoriesScreen;
