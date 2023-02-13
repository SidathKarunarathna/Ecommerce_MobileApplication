import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  ScrollView,
  Spacer,
  Text,
  View,
} from "native-base";
import React, { useState,useEffect } from "react";
import Colors from "../color";
import NumericInput from "react-native-numeric-input";
import Review from "../Components/Products/Review";
import Buttone from "../Components/Profile/Buttone";
import Rating from "../Components/Home/Rating";
import { useNavigation } from "@react-navigation/native";
// import Rating from "../Components/Home/Rating";

function SingleProductScreen({route}) {
  const [value, setValue] = useState(0);
  const navigation = useNavigation()
  const product = route.params
  const productId= product._id;
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("")
  const [quantity, setQuantity] = useState("")

  useEffect(()=>{
    fetch("http://192.168.8.198:5000/product/getOneProduct",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({productId})
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((e) => {
        console.log(e)
        setError(e);
      })
      .finally(() => {
      });
  },[])

  const handleSubmit = () => {
    // To handle user requests
    fetch("http://192.168.8.198:5000/user/sign-up", {
      method: "POST", headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }, //POST data
      body: JSON.stringify({ name, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.message == "success"){
          navigation.navigate("Login");
        }
        
      })
      .catch((e) => {
        console.log(e)
        setError(e);
      })
      .finally(() => {
      });
  };

  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{uri:products.image}}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {products.name}
        </Heading>
        <Rating value={products.rating} text={`${products.numReviews} reviews`} />
        <HStack space={2} alignItems="center" my={5}>
          {products.countInStock>0 ? (
            <NumericInput
            value={value}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={products.countInStock}
            minValue={0}
            borderColor={Colors.deepGray}
            rounded
            textColor={Colors.black}
            iconStyle={{ color: Colors.white }}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
            onChange={(e) => setValue(e)}
          />
          ):( <Heading bold color={Colors.red} italic fontSize={10}>
            Out of Stock
          </Heading>)}
         
          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            Rs.{products.price}
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={13}>
         {products.description}
        </Text>
        <Buttone onPress={()=> navigation.navigate("Cart")} bg={Colors.main} color={Colors.white} mt={10}>
          Add To Cart
        </Buttone>
        {/* review */}
        <Review />
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;
