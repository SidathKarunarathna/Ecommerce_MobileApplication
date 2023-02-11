import React from "react";
import { Box,Center,FormControl,ScrollView,Text, VStack} from "native-base";
import Colors from "../color";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Buttone from "../Components/Profile/Buttone";



const paymentMethodes=[

  {
   image: require("../../assets/Images/paypal.png"),
   alt:"paypal",
   icon:"Ionicons"
  },

  {
    image:require("../../assets/Images/discover.png"),
    alt:"discover",
    icon:"fontAwesome"
   },

   {
    image:require("../../assets/Images/googlepay.png"),
    alt:"googlepay",
    icon:"fontAwesome"
   },
  
]


function PaymentScreen() {
  return (

    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          PAYMENT METHOD
        </Text>
      </Center>

      <Box h='full' bg={Colors.subGreen} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>

            {paymentMethodes.map((i,index)=>(


                <VStack key={index} alignItems='center' bg={Colors.white} px={3} py={1} justifyContent="space-between" rounded={10}>


                   <Box>
                    <Image source={i.image} alt={i.alt} resizeMode='contain' w={60} h={50}/>
                  
                  </Box>
                {i.icon==="Ionicons" ? <Ionicons name='checkmark-circle' size={30} color={Colors.main}/> : <FontAwesome
                 name='circle-thin' size={30} color={Colors.main}
                 />}
                </VStack>

            )
                                    
            )}

            <Buttone bg={Colors.main} color={Colors.white} mt={5}>
              CONTINUE
            </Buttone>

            <Text italic textAlign="center">
              Payment method is <Text bold>Paypal</Text> by default
            </Text>
            

          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}
export default PaymentScreen;
