import { Box, ScrollView, Text, View } from "native-base";
import React from "react";
import Colors from "../color";
import OrderInfo from "../Components/OrderInfo";
import {FontAwesome,FontAwesome5,Ionicons} from '@expo/vector-icons'

function PlaceOrderScreen() {
  return (
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} 
        showsHorizontalScrollIndicator={false}>
          <OrderInfo 
          title="CUSTOMER" 
          subTitle ="Admin Heshan" 
          text="admin@gmail.com"
          icon={<FontAwesome 
          name="user" 
          size={30} 
          color={Colors.white}/>} />
        
        <OrderInfo 
          title="SHIPPING INFO" 
          subTitle ="Shipping: Kurunegala" 
          text="Pay Method: Paypal"
          icon={<FontAwesome5 
          name="shipping-fast" size={30} 
          color={Colors.white}/>} />
        <OrderInfo 
          title="DELIVER TO" 
          subTitle ="Address: " 
          text="Sidath Karunarathna, Bowaththa, Yakwila"
          icon={<Ionicons
          name="location-sharp" size={30} 
          color={Colors.white}/>} />
        </ScrollView>
      </Box>
      <Box px={6} flex={1} pb={3}>

      </Box>
    </Box>
  );
}
export default PlaceOrderScreen;
