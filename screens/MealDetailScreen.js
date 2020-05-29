import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";

import HeaderButton from '../components/HeaderButton';
import DefaultText from "../components/DefaultText";

import {MEALS} from "../data/dummy-data";

const ListItem = props => {
  return <View style={styles.listItem}>
    <DefaultText>{props.children}</DefaultText>
  </View>
};

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <ScrollView>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration} m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>

      <Text style={styles.sectionTitle}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}

      <Text style={styles.sectionTitle}>Steps</Text>
      {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
    </ScrollView>
  );
};

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
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#dfdfdf',
  },
  sectionTitle: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10
  },
  listItem: {
    marginVertical: 6,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 3,
    padding: 5
  }
});

export default MealDetailScreen;
