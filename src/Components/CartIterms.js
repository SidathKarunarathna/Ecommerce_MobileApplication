import { View, Text } from "“react-native";
import React from "react";

import { Box, Center } from "native-base";

import { SwipeListView } from "react-native-swipe-list-view";
import products from '../data/Products';

const Swiper = () =>(
<SwipeListView
rightOpenValue={-50}
previewRowKey={0}
previewOpenValue={-40}
previewOpenDelay={3000}
data={products.slice(0,2)}
renderHiddenItem={}
renderItems={renderIterms}
showsVerticalScrollIndicator={false}/>
)




const renderitem = (data) => (
<Pressable> 
    <Box m1={6} mb={31}> 
      <HStack 
      alignItems="center" 
      bg={Colors.white} 
      shadow={1} 
      rounded={10} 
      overflow="hidden" 
      >
     <Center w="25%" bg={Colors.deepGray}> 
       <Image 
          source={{ uri: data.item.image}} 
          alt={data.item.name} 
          w="full" 
          h={24} 
          resizeMode="contain"/> 
          </Center> 
          
          <VStack w='60%' px={2} space={3}> 
             <Text isTruncated color={Colors.black} bold fontSize={10}> 
               {data.item.name}
             </Text> 
             <Text bold color={Colors.lightBlack}>
                ${data.item.price}
             </Text>
          </VStack> 
          <Center>
            <Button></Button>
          </Center>
      </HStack> 
    </Box> 
</Pressable> 

);









const CartIterms = () => {
    return(
        <Box mr={6}>
            <Text>CartIterms</Text>
        </Box>
    )
}

export default CartIterms;