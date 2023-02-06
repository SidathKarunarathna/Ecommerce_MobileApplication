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
import React, { useState } from "react";
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
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={product.image}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {product.name}
        </Heading>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        <HStack space={2} alignItems="center" my={5}>
          {product.countInStock>0 ? (
            <NumericInput
            value={value}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={product.countInStock}
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
            Rs.{product.price}
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={13}>
         {product.description}
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
