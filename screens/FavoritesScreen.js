import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import MealList from "../components/MealList";

import {HeaderButton, HeaderButtons, Item} from "react-navigation-header-buttons";
import {useSelector, useDispatch} from "react-redux";
import DefaultText from "../components/DefaultText";
import {loadFavorites} from "../store/actions/meals";

const FavoritesScreen = props => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFavorites());
  }, [dispatch])

  if (!favoriteMeals.length) {
    return (
      <View style={styles.wrapper}>
        <DefaultText>No favorite meals has been found. Start adding some!</DefaultText>
      </View>
    )
  }

  return (
    <View style={styles.wrapper}>
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
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen;
