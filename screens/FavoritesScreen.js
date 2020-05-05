import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FavoritesScreen = props => {
  return (
    <View style={styles.categoriesScreen}>
      <Text>The FavoritesScreen!</Text>
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

export default FavoritesScreen;
