import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

const AddButton = ({ onPress }) => {

  return <TouchableOpacity
            style={styles.button} 
            onPress={onPress}>       
            <Text  style={styles.buttonText} >+</Text>
        </TouchableOpacity>
};


const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgb( 128, 85, 200)',
    padding: 10,
    width: 50, 
    height: 50,
    borderRadius: 25,   
    position: 'absolute', 
    bottom: 78,
    right: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, 
  },
  buttonText: {
    color: 'white',
    fontSize: 25, 
    fontWeight: 'bold',   
  },
});

export default AddButton;
