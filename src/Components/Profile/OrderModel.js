import { Center, Button, VStack, HStack, Text , Pressable, Image } from "native-base";
import React, { useState } from "react"
import Colors from "../../color";
import Buttone from "./Buttone";
import { Modal, View, StyleSheet} from "react-native";
import { AntDesign } from '@expo/vector-icons'


const OrdersInfos=[
    {
        title:"Products",
        Price:125.77,
        color:'black'
    },
    {
        title:"Shipping",
        Price:43.00,
        color:'black'
    },
    {
        title:"tax",
        Price:32.45,
        color:'black'
    },
    {
        title:"Total Amount",
        Price:2000.00,
        color:'main'
    },
]
const OrderModel = () => {
    const [showModel, setShowModel] = useState(false);
    return (
        <Center>
            <Buttone
                onPress={() => setShowModel(true)}
                bg={Colors.main}
                color={Colors.white}
                mt={5}
                rounded={30}
            >
                SHOW PAYMENT & TOTAL
            </Buttone>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModel}
                onRequestClose={() => {
                    setShowModel(!showModel);
                }}>
                
                <View style={styles.modelview}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.modelText}>ORDER </Text>
                        <Pressable style={{ alignItems: "flex-end" }} onPress={() => setShowModel(!showModel)}>
                            <AntDesign name="close" size={24} color="black" />
                        </Pressable>
                    </View>
                    <VStack space={2}>
                        {OrdersInfos.map((i,index)=>(
                            <HStack
                            justifyContent="space-between">
                                <Text style={styles.bodyText1} fontWeight="medium">{i.title}</Text>
                                <Text 
                                style={styles.bodyText2} 
                                fontWeight="medium" 
                                color={i.color==="main"? Colors.main:Colors.black}
                                >
                                    Rs.{i.Price.toFixed(2)}
                                    </Text>
                            </HStack>
                        ))}
                    </VStack>
                    <Pressable 
                    w="full"
                    justifyContent="center"
                    bg={Colors.paypal}
                    h={45}
                    rounded={3}
                    overflow="hidden"
                    onPress={()=>setShowModel(false)}>
                        <Image
                        source={require("../../../assets/Images/paypal.png")}
                        alt="paypal"
                        resizeMode="contain"
                        w="full"
                        h={34}/>
                    </Pressable>
                    <Button 
                    bg={Colors.black}
                    h={45}
                    mt={2}
                    w="full"
                    _text={{color:Colors.white}}
                    onPress={()=> setShowModel(false)}
                    _pressed={{bg:Colors.main}}
                    >
                        PLACE AN ORDER
                    </Button>
                </View>
            </Modal>

        </Center>
    );
};
const styles = StyleSheet.create({

    modelview: {
        margin:20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: "center",
        marginTop:100
       

    },
    modelText: {
        marginLeft:0,
        fontSize: 36,
        width: "85%",
        lineHeight: 36
        
    },
    bodyText1:{
       padding:20,
       fontSize:16,
       flex:1,

    },
    bodyText2:{
        padding:20,
        fontSize:16,
        flex:1,
        alignSelf:"flex-end",
        textAlign:"right"
    },

});

export default OrderModel;