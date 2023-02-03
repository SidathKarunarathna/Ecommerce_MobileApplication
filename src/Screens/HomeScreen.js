import { Box, Text, View } from "native-base";
import React from "react";
import Colors from "../color";
import HomeProducts from "../Components/Home/HomeProducts";
import HomeSearch from "../Components/Home/HomeSearch";

export default function HomeScreen() {
  return (
    <Box flex={1} bg={Colors.subGreen}>
      <HomeSearch />
      <HomeProducts />
    </Box>
  );
}
