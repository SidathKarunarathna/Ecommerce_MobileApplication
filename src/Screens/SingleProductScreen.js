import { Box, Image, ScrollView, Text, View } from "native-base";
import React from "react";
import Colors from "../color";

function SingleProductScreen() {
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        {/* <Image source={require("..")} */}
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;
