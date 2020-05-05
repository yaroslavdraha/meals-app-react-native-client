import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const CategoriesScreen = props => {
  return (
    <View style={styles.categoriesScreen}>
      <Text>The Categories screen!</Text>

      <Button title="Go to Meals!" onPress={() => {
        props.navigation.navigate('CategoryMeals');
      }}/>
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

export default CategoriesScreen;
