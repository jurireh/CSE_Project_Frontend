import React from 'react';
import { View, Text, Image, Modal, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const RestaurantModal = ({ isVisible, onClose, restaurant, onCancel }) => {
    console.log(restaurant)
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={isVisible}
    onRequestClose={onClose}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>

        <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  {/*   </TouchableWithoutFeedback> */}
  </Modal>)
   /*  <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}> */
          {/*  <Image source= "../assets/icons/happycow2.jpg" style={styles.image} />  */}
         {/*  <Text style={styles.title}> {restaurant.name}</Text>
          <Text style={styles.description}>{restaurant.description}</Text>
          <Text style={styles.sectionTitle}>Reviews:</Text> */}
          {/* {restaurant.reviews.map((review, index) => (
            <View key={index} style={styles.review}>
              <Text>{`User: ${review.user}`}</Text>
              <Text>{`Rating: ${review.rating}/5`}</Text>
              <Text>{`Comment: ${review.comment}`}</Text>
            </View>
          ))} */}          
 /*          <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal> */
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1, 
    justifyContent: 'center',
 /*    marginBottom: 0, */
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  review: {
    marginBottom: 8,
  },
  cancelButton: {
  /*   padding: 10, */
    alignItems: 'center', 
   /*  marginTop: 10, */
  },
  
  cancelButtonText: {
    color: 'black',
    fontWeight: 'bold'
  },
});


export default RestaurantModal;
