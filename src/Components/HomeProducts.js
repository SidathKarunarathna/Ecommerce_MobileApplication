import { Box, Flex, Heading, Image, ScrollView, Text } from "native-base";
import React from "react";
import { Pressable } from "react-native";
import Colors from "../color";
import products from "../data/products";
import Rating from "./Rating";

function HomeProducts() {
  return (
    <ScrollView flex={1}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
      >
        {products.map((product) => {
          <Pressable
            key={product._id}
            w="47%"
            bg={Colors.black}
            rounded="md"
            shadow={2}
            pt={0}
            my={3}
            pb={2}
            overflow="hidden"
          >
            ;
            {
              <Image
                source={{ uri: product.image }}
                alt={product.name}
                w="full"
                h={24}
                resizeMode="contain"
              />
            }
            <Box px={4} pt={1}>
              <Heading size="sm" bold>
                Rs.{product.price}
              </Heading>
              <Text fontSize={10} mt={1} isTruncated w="full">
                {product.name}
              </Text>
              {/* rating */}
              <Rating value={product.rating} text={product.numReviews} />
            </Box>
          </Pressable>;
        })}
      </Flex>
    </ScrollView>
  );
}

export default HomeProducts;
