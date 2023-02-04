import React from "react";
import { Box,Center,FormControl,ScrollView,Text, VStack} from "native-base";
import Colors from "../color";


const ShippingInputs=[
  {
    lable:"ENTER CITY",
    type:"text"
  },
  {
    lable:"ENTER COUNTRY",
    type:"text"
  },
  {
    lable:"ENTER POSTAL CODE",
    type:"text"
  },
  {
    lable:"ENTER ADDRESS",
    type:"text"
  },
]


function ShippingScreen() {
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          DELIVERY ADDRESS
        </Text>
      </Center>
      <Box h='full' bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>

            {ShippingInputs.map((i,index)=>(
              <FormControl key={index}>
              <FormControl.Label 
              _text={{
                fontSize:'12px',
                fontWeight:'bold',

              }}>
                {i.lable}
              </FormControl.Label>
              <Input 
              borderWidth={0.2}
              borderColor={Colors.main}
              bg={Colors.subGreen}
              py={4}
              type={i.type}
              color={Colors.main}
              _focus={{
                bg:Colors.subGreen,
                borderWidth:1,
                borderColor:Colors.main,
              }}/>
            </FormControl>
            ))}

            <Buttone bg={Colors.main} color={Colors.white} mt={5}>
              CONTINUE
            </Buttone>
            

          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}
export default ShippingScreen;
