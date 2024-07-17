import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Mockpage = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>We are currently working on this feature... Coming Soon!</Text>
  </View>
);

Mockpage.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="search" size={20} color={tintColor} />
  ),
};

export default Mockpage;