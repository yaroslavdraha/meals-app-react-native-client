import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import MealItem from "./MealItem";

const MealList = props => {

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
