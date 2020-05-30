import React, {useCallback, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {useDispatch, useSelector} from "react-redux";

import HeaderButton from '../components/HeaderButton';
import DefaultText from "../components/DefaultText";
import {toggleFavorite} from "../store/actions/meals";

const ListItem = props => {
  return <View style={styles.listItem}>
    <DefaultText>{props.children}</DefaultText>
  </View>
};

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');

  const allMeals = useSelector(state => state.meals.meals);
  const currentMealIsSelected = useSelector(state =>
    state.meals.favoriteMeals.some(meal => meal.id === mealId)
  );

  const selectedMeal = allMeals.find(meal => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({toggleFavorite: toggleFavoriteHandler})
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({isFavorite: currentMealIsSelected})
  }, [currentMealIsSelected]);

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
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFavorite = navigationData.navigation.getParam('toggleFavorite');
  const isFavorite = navigationData.navigation.getParam('isFavorite');

  const headerRightButtons = (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title='Favorite' iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}  onPress={toggleFavorite}/>
    </HeaderButtons>
  );

  return {
    headerTitle: mealTitle,
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
