import { useNavigation } from "@react-navigation/native";
import { Box, Flex, Heading, Image, ScrollView, Text,Pressable } from "native-base";
import React,{useState,useEffect} from "react";
import Colors from "../../color";
import Rating from "../Home/Rating";

function HomeProducts({product}) {
  

  const navigation = useNavigation()
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
      >
        {product.map((item,index) => {
          return(
          <Pressable
          onPress={()=> navigation.navigate("Single",item)}
            key={index}
            w="47%"
            bg={Colors.white}
            rounded="md"
            shadow={2}
            pt={0}
            my={3}
            pb={2}
            overflow="hidden"
          >
            
              <Image
                source={{uri:item.image}}
                alt={item.name}
                w="full"
                h={24}
                resizeMode="contain"
              />
            
            <Box px={4} pt={1}>
              <Heading size="sm" bold>
                Rs.{item.price}
              </Heading>
              <Text fontSize={10} mt={1} isTruncated w="full">
                {item.name}
              </Text>
              {/* rating */}
              <Rating value={item.rating} />
            </Box>
          </Pressable>
        );})}
      </Flex>
    </ScrollView>
  );
}

export default HomeProducts;
