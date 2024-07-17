import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons"; 
import Mockpage from '../pages/MockPage'
import MapScreen from '../pages/MapScreen';
import ReviewModal from '../pages/ReviewScreen';
import LoginPage from '../pages/Login'
import AddReviewPage from '../pages/AddReview'
import RestaurantModal from '../pages/OneRestaurantModal';
/* import RestaurantPage from '../pages/OneRestaurant';
 */import RestaurantPage from '../pages/Restaurant';
import { createStackNavigator } from '@react-navigation/stack';
import RestaurantOverview from '../pages/AllRestaurants';


const MainStack = createStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator 
  screenOptions={{
    headerShown: false
    }}>
    <MainStack.Screen 
    name="Explore" 
    component={MapScreen}  />
     <MainStack.Screen name="AddReviewPage" component={AddReviewPage} />
     <MainStack.Screen name="LoginPage" component={LoginPage} />
     <MainStack.Screen name="RestaurantPage" component={RestaurantPage} />
     <MainStack.Screen name="RestaurantOverview" component={RestaurantOverview} />
  </MainStack.Navigator>
);

const ModalStack = createStackNavigator();

const ModalStackScreen = () => (
  <ModalStack.Navigator screenOptions={{
    headerShown: false,
    presentation:"modal"
  }}>
    <ModalStack.Screen name="Main" component={MainStackScreen} screenOptions={{
    headerShown: false
    }}/>
    <ModalStack.Screen name="ReviewModal" component={ReviewModal} screenOptions={{
    headerShown: false
    }}/>
    <ModalStack.Screen name="RestaurantModal" component={RestaurantModal} screenOptions={{
    headerShown: false
    }}/>
  </ModalStack.Navigator>
);


const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  
  <Tab.Navigator
/*          initialRouteName="Home"*/
      screenOptions={({ route }) => ({
        headerShown: false, 
        tabBarActiveTintColor: 'rgb( 128, 85, 200)',
        tabBarIcon: ({ focused, color}) => {
          let iconName;
  
          if (route.name === 'Explore') {
            iconName = "md-search-outline";
            color = focused ? 'rgb( 128, 85, 200)' : '#a9a9a9';
          } else if (route.name === 'Social') {
            iconName = "md-person-add-outline";
            color = focused ? 'rgb( 128, 85, 200)' : '#a9a9a9';          }  
          else if (route.name === 'Feed') {
            iconName = "md-home-outline";
            color = focused ? 'rgb( 128, 85, 200)' : '#a9a9a9';          }  
          else if (route.name === 'Notifications') {
            iconName = "md-notifications-outline";
            color = focused ? 'rgb( 128, 85, 200)' : '#a9a9a9';          }  
          else if (route.name === 'Me') {
            iconName = "md-person-outline";
            color = focused ? 'rgb( 128, 85, 200)' : '#a9a9a9';          }  

          return <Ionicons name={iconName} size={30} color={color} />;
        },
      })}
      >
        <Tab.Screen
        name="Explore"
        component={ModalStackScreen}
       
      />
       <Tab.Screen
        name="Social"
        component={Mockpage}
      />
      <Tab.Screen
        name="Feed"
        component={RestaurantOverview}
      />
      <Tab.Screen
        name="Notifications"
        component={Mockpage}
  /*       options={{
          activeTintColor: 'rgb( 128, 85, 200)', 
        }}  */
      />
          <Tab.Screen
        name="Me"
        component={LoginPage}
      />
    </Tab.Navigator>
);

export default TabNavigator;

