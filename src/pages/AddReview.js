import { Container } from 'native-base';
import React,{useState} from 'react';
import { View, Text, Image, StyleSheet, Dimensions,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Box,NativeBaseProvider,Center, Stack ,Slider, Button,Heading} from "native-base";
import { useRoute, useNavigation } from '@react-navigation/native';

const AddReviewPage = () => {

  const route = useRoute();
  const { data } = route.params || {};
  const [title, setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [rating,setRating] = useState("1");
  const navigation = useNavigation();



const handleChangeTitle = (text) => setTitle(text);
const handleChangeDesc = (text) => setDescription(text);
const handleChangeRating = (text) => setRating(text);

async function onSubmit(){
  const ip = process.env.CurrentIP;
  try{
  const response = await fetch(`http://${ip}:3000/review/`,{
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({title: title,description: description,rating:rating,markerId: data.id})
  })
    if(!response.ok){
      throw new Error("fetch createReview failed")
    }
}catch(err){
  throw new Error("fetch createReview failed",err);
}
}

return(
  <NativeBaseProvider>
    <ScrollView contentContainerStyle={{flexGrow: 1}}
  keyboardShouldPersistTaps='handled'
>
    <Heading marginTop= "10" fontSize="30" p="4" pb="3" marginBottom={10}>
    Submit your review for {data.name}
      </Heading>
    <Center flex={1} px="4">
    <Stack space={10} w="100%" maxW="300px" mx="auto">
      <Input borderColor= 'black' _focus={{ bg: "rgba(228,218,242,255)",borderColor: "black" }} size="lg" value={title} w="100%" onChangeText={handleChangeTitle} placeholder="Review Title" />
      <Input borderColor= 'black' _focus={{ bg: "rgba(228,218,242,255)", borderColor: "black"}} size="lg" value={description} w="100%" onChangeText={handleChangeDesc} placeholder="Review Description" />
      <Text textAliqn = "center">Rating: {rating}</Text>
      <Slider colorScheme= "rgb( 128, 85, 200)" w="3/4" maxW="300" defaultValue={1} minValue={1} maxValue={5} accessibilityLabel="rating" step={1}
        onChange={handleChangeRating}>
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
        </Slider>
        <Button style= {styles.button} onPress={() =>{ onSubmit(); navigation.navigate("RestaurantPage",{data:{restaurant:data}})}}><Text style= {styles.buttonText}>Submit</Text></Button>
  </Stack>
  </Center>
  </ScrollView>
  </NativeBaseProvider>
)
};

const styles = StyleSheet.create({

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
}
});


export default AddReviewPage;