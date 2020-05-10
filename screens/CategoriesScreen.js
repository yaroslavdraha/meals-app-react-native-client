import React from 'react';
import {StyleSheet, Text, View, Button, FlatList, Touchable, TouchableOpacity, Platform} from 'react-native';

import {CATEGORIES} from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = props => {
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
}

const styles = StyleSheet.create({
});

export default CategoriesScreen;
