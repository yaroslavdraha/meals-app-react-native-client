import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const CategoryMealsScreen = props => {
  return (
    <View style={styles.categoriesScreen}>
      <Text>The Category Meals screen!</Text>
      <Button title="Go to Meal Detail screen!" onPress={() => props.navigation.navigate('MealDetail')}/>
      <Button title="Go back" onPress={() => props.navigation.pop()}/>

    </View>
  );
}

const styles = StyleSheet.create({
  categoriesScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;
