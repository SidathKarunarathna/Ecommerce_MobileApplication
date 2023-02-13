import { Box, Heading, ScrollView, Text, View } from "native-base";
import React from "react";
import Colors from "../color";
import OrderInfo from "../Components/Profile/OrderInfo";
import {FontAwesome5,Ionicons} from '@expo/vector-icons'
import OrderItem from "../Components/Profile/OrderItems";
import OrderModel from "../Components/Profile/OrderModel";

function OrderScreen() {
  return (
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} 
        showsHorizontalScrollIndicator={false}>
        <OrderInfo 
          title="SHIPPING INFO" 
          success
          subTitle ="Shipping: Kurunegala" 
          text="Pay Method: Paypal"
          icon={<FontAwesome5 
          name="shipping-fast" size={30} 
          color={Colors.white}/>} />
        <OrderInfo 
          title="DELIVER TO" 
          danger
          subTitle ="Address: " 
          text="Sidath Karunarathna, Bowaththa, Yakwila"
          icon={<Ionicons
          name="location-sharp" size={30} 
          color={Colors.white}/>} />
        </ScrollView>
      </Box>
      <Box px={6} flex={1} pb={3}>
            <Heading 
            bold
            fontSize={15} 
            isTruncated
            my={4}>
              PRODUCTS
            </Heading>
            <OrderItem/>
            <OrderModel/>
      </Box>
    </Box>
  );
}
export default OrderScreen;
