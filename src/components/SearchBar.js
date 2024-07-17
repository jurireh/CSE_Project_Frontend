import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
/* import Icon from 'react-native-vector-icons/FontAwesome'; // or any other icon library
 */

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <Icon name="search" size={20} color='rgb( 128, 85, 200)'style={styles.input}/>
      <TextInput
        placeholder="Nearby"
        style={styles.input}
        placeholderTextColor='rgb( 128, 85, 200)'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    margin: 20,
    marginTop: 40, 
    elevation: 3, 
    justifyContent: "center", 
    height: 60 
},
  input: {
/*      flex: 1,  */
    marginTop: 80,
    color: 'rgb( 128, 85, 200)',
  },
});

export default SearchBar;
