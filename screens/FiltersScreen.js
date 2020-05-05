import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FiltersScreen = props => {
  return (
    <View style={styles.categoriesScreen}>
      <Text>The FiltersScreen!</Text>
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

export default FiltersScreen;
