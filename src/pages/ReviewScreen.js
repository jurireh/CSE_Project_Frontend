import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ReviewModal = ({ isVisible, onClose, onOptionPress, onCancel }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >

      <View style={styles.modalContainer}>

        <View style={styles.modalContent}>
          <TouchableOpacity onPress={() => onOptionPress(1)} style={styles.button}>
            <Text style={styles.buttonText}>Add a Review</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onOptionPress(2)} style={styles.button}>
            <Text style={styles.buttonText}>Add Photos</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onOptionPress(3)} style={styles.button}>
            <Text style={styles.buttonText}>Add Listing</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1, 
        justifyContent: 'flex-end',
        marginBottom: 0,
      },

      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center', 
      },

   button: {
    backgroundColor: 'rgba(228,218,242,255)',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10, 
    alignItems: 'center',
    justifyContent: 'center',  
    height:50, 
  },

  buttonText: {
    color: 'rgb( 128, 85, 200)',
    fontWeight: 'bold',
  },

  cancelButton: {
    padding: 10,
    alignItems: 'center', 
    marginTop: 10,
  },

  cancelButtonText: {
    color: 'black',
    fontWeight: 'bold'
  },
});

export default ReviewModal;
