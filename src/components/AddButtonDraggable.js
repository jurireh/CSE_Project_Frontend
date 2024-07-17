import React,{useRef} from 'react';
import { View, PanResponder, Animated, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const DraggableButton = ({onPress}) => {
  
  const animatedValueXY = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: animatedValueXY.x,
            dy: animatedValueXY.y,
          },
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        // Handle release if needed
      },
    })
  ).current;

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        styles.draggableButton,
        {
          transform: [
            { translateX: animatedValueXY.x },
            { translateY: animatedValueXY.y },
          ],
        },
      ]}
    > 
    <Animated.View>
          <TouchableOpacity style={styles.button} onPress={onPress}> 
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
    }


const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgb( 128, 85, 200)',
    padding: 10,
    width: 50, 
    height: 50,
    borderRadius: 25,   
    position: 'absolute', 
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, 
    marginLeft: 20, 
  },
  buttonText: {
    color: 'white',
    fontSize: 25, 
    fontWeight: 'bold',   
  },
});

export default DraggableButton;
