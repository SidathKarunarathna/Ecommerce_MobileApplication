import { Text, View } from "native-base";
import React from "react";
import {Box,Center,ScrollView,Text,View} from 'native-base';
import Colors from '../color';
import CartEmpty from '../Components/CartEmpty'
import { SafeAreaView } from "react-native-safe-area-context";

function CartScreen() {
  return (
    <Box flex={1} SafeAreaTop bg={Colors.subGreen}>
      {/*Header*/}
      <Center w='full' py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Cart
        </Text>
      </Center>
      <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
    </Box>
  );
}

export default CartScreen;
