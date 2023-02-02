import { Box, Image, Text, View } from "native-base";
import React from "react";

export default function HomeScreen() {
  return (
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
      <Image
        flex={1}
        alt="Logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/cover.png")}
      />
    </Box>
  );
}
