import React, { useEffect, useState, useRef  } from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity} from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker, Callout } from 'react-native-maps';
import AddButton from '../components/AddButton';
import ReviewModal from "../pages/ReviewScreen"
import RestaurantModal from './OneRestaurantModal';
import RestaurantPage from './Restaurant';
import LoginPage from '../pages/Login'
import AddReviewPage from '../pages/AddReview'
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../components/SearchBar';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Sending...']);

const MapScreen = ()  => {

    const [location, setLocation] = useState(null);
    const [isReviewModalVisible, setReviewModalVisible] = useState(false);
    const [markers,setMarkers] = useState(null);
    const setMarkerRef = useRef(null);
    const pressCountRef = useRef(0);
    const [restaurantModalVisible, setRestaurantModalVisible] = useState(false);

    const navigation = useNavigation();

    const handleMarkerPress = (marker) => {
      if(setMarkerRef.current != marker){
        pressCountRef.current = 0; 
      }
        setMarkerRef.current= marker;

        console.log('Marker Pressed:', setMarkerRef);

        pressCountRef.current += 1;

        console.log(pressCountRef)

        if (pressCountRef.current === 2) {
        setRestaurantModalVisible((prevVisible) => {
          console.log(prevVisible); // Previous state
          return true; 
        });
        pressCountRef.current = 0; 
          const data = { restaurant: setMarkerRef.current };
           navigation.navigate('RestaurantPage' ,{data} )
             }
        /*  setTimeout(() => {
          pressCountRef.current = 0;
       }, 500);  */
    };

    const handleButton = () => {
      setReviewModalVisible(true);
    };

    const handleClose = () => {
      setReviewModalVisible(false);
    };
  
    const closeRestaurantModal = () => {
    setRestaurantModalVisible(false)
    }


    const handleOptionPress = (option) => {
      switch (option) {
        case 1:
          setReviewModalVisible(false);
          navigation.navigate(AddReviewPage)
          break;
        case 2:
          setReviewModalVisible(false);
          navigation.navigate(LoginPage)
          break;
        case 3:
          setReviewModalVisible(false);
          navigation.navigate(LoginPage)
          break;
        default:
          break;
    };
  }

  
    useEffect(() => {
      async function fetchMarkers() {
          try {
            const ip = process.env.CurrentIP;
              console.log("ip" + ip);
              const response = await fetch(`http://${ip}:3000/markers/`); /* ${ip} */
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const data = await response.json();
              setMarkers(data);
          } catch (error) {
              console.error('Error fetching markers:', error);
          }
      }
      fetchMarkers();
  }, []);


  useEffect(() => {
    const fetchLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.error('Permission to access location was denied');
          return;
        }
  
        let locationData = await Location.getCurrentPositionAsync({});
        setLocation(locationData);
        console.log('Location:', locationData);
        console.log('Map Dimensions:', StyleSheet.flatten(styles.map));
      } catch (error) {
        console.error('Error getting location:', error);
      }
    };
  
    if (!location) {
      fetchLocation();
    }
  }, [location]);
  
  

  return (
    <View  style={{ flex: 1 }}>
    {location  ? (
      //if location true
       <View  style={styles.container} > 
      <MapView
           style={styles.map}   
          initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
     {/*    <SearchBar/> */}
              <Marker
      coordinate={{ latitude: location.coords.latitude, longitude: location.coords.longitude }}
      title="Current Location"
      description="You are here!"
      pinColor='rgb( 128, 85, 200)'
    />
       {Array.isArray(markers) && markers.length > 0 ? (
        markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{latitude:marker.latitude,longitude: marker.longitude}}
            title={marker.name}
            description={marker.description}
            onPress={() => handleMarkerPress(marker)}
       >
         {/* <Callout onPress={handleTooltipPress}>
            <View>
              <Text>{marker.name}</Text>
              <Text>{marker.description}</Text>
            </View>
          </Callout> */}
          </Marker>
  ))
  ) :  null}
        </MapView> 

{/*    {restaurantModalVisible && ( 
              <View style={styles.modalContainer}>  
              <RestaurantModal
                visible={restaurantModalVisible}
                onClose={closeRestaurantModal}
                restaurant={setMarkerRef.current}
                onCancel={closeRestaurantModal}
              />
              </View>  
          )} 
 */}
         <AddButton onPress={handleButton} style={{ /* bottom: 78,
    right: 40 */}}/>
    
        <View style={styles.modalContainer}>
       <ReviewModal
        isVisible={isReviewModalVisible}
        onClose={handleClose}
        onOptionPress={handleOptionPress}
        onCancel={handleClose} 
      />
      </View>
 
      </View>
    ) : (
      //if no location
      <View style={styles.loadingContainer}>
      <Image source={require('../assets/icons/happycow2.jpg')} /> 
      <Text>Loading location...</Text>
      </View>
    )}
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    modalContainer: {
/*       position: 'absolute', */
    /*   flex: 1, */
      bottom: 0,
      left: 0,
      right: 0,
    },
    map: {
      flex: 1,
      ...StyleSheet.absoluteFillObject,
    },
    loadingContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  


export default MapScreen;