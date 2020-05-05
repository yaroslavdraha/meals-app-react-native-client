import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MealDetailScreen = props => {
  return (
    <View style={styles.categoriesScreen}>
      <Text>The MealDetailScreen!</Text>
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

export default MealDetailScreen;
