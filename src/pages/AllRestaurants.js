import React,{useState, useEffect} from 'react';
import RestaurantPage from './Restaurant';
import { Box, FlatList, Heading, Avatar, HStack, VStack, Text, Spacer, NativeBaseProvider, Center} from 'native-base';
import { View,TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const RestaurantOverview = ()=> {

   const [markers,setMarkers] = useState(null);

   const navigation = useNavigation();

   const handlePress = (item) => {
    console.log(item)
    const data = { restaurant: item };
      navigation.navigate('RestaurantPage' ,{data} ) 
   } 


  useEffect(() => {
    async function fetchMarkers() {
        try {
          const ip = process.env.CurrentIP;
            console.log("ip" + ip);
            const response = await fetch(`http://${ip}:3000/markers/`); 
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

  return <Box> 
      <Heading marginTop= "10" fontSize="30" p="4" pb="3" marginBottom={10}>
        Restaurant Overview
      </Heading>
      <FlatList 
      data={markers} 
      renderItem={({item}) => 
      <View> 
        <TouchableOpacity onPress={() => handlePress(item)} >
     <Box borderBottomWidth="1" _dark={{
      borderColor: "muted.50"
    }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2"> 
             <HStack space={[2, 3]} justifyContent="space-between"> 
              <Avatar size="80px" source={require('../assets/icons/happycow2.jpg')}
         />
            <VStack> 
                <Text _dark={{
            color: "warmGray.50"
          }} color="coolGray.800" bold>
                  {item.name}
                </Text>
                <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
                  {item.description}
                </Text>
             </VStack>
              <Spacer />
            </HStack> 
         </Box> 
         </TouchableOpacity>
            </View>}
          keyExtractor={item => item.id} />
     </Box>
};


const styles = StyleSheet.create({
    safeAreaView: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    base: {
      flexGrow: 1,
      padding: 5, 
    },
});
    

export default () => {
    return (
      <NativeBaseProvider>
      {/*   <Center flex={1} px="3"> */}
            <RestaurantOverview />
      {/*   </Center> */}
      </NativeBaseProvider>
    );
    }