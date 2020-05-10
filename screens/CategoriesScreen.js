import React from 'react';
import {StyleSheet, Text, View, Button, FlatList, Touchable, TouchableOpacity, Platform} from 'react-native';

import {CATEGORIES} from "../data/dummy-data";

const CategoriesScreen = props => {
  const renderGridItem = (listItem) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => props.navigation.navigate({
          routeName: 'CategoryMeals',
          params: {
            categoryId: listItem.item.id
          }
        })}>
        <View>
          <Text>{listItem.item.title}</Text>
        </View>
      </TouchableOpacity>
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
  categoriesScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 100
  }
});

export default CategoriesScreen;
