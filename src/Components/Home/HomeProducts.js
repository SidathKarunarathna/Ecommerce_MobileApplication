import { Box, Flex, Heading, Image, ScrollView, Text,Pressable } from "native-base";
import React from "react";
import Colors from "../../color";
import products from "../../data/products"
import Rating from "../Home/Rating";

function HomeProducts() {
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
      >
        {products.map((product,index) => {
          return(
          <Pressable
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
                source={product.image}
                alt={product.name}
                w="full"
                h={24}
                resizeMode="contain"
              />
            
            <Box px={4} pt={1}>
              <Heading size="sm" bold>
                Rs.{product.price}
              </Heading>
              <Text fontSize={10} mt={1} isTruncated w="full">
                {product.name}
              </Text>
              {/* rating */}
              <Rating value={product.rating} />
            </Box>
          </Pressable>
        );})}
      </Flex>
    </ScrollView>
  );
}

export default HomeProducts;
