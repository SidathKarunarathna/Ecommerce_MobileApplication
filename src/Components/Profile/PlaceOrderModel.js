import { Center,Button  } from "native-base";
import React,{useState} from "react"
import Colors from "../../color";


const PlaceOrderModel = () => {
    const [showModel,setShowModel]=useState(false)
    return(
        <Center>
            <Button 
            onPress={()=> setShowModel(true)} 
            bg={Colors.black} 
            color={Colors.white} 
            mt={5}
            rounded={30}
            w="90%"
            style={{
                paddingTop:15,
                paddingBottom:15
            }}
            >
                SHOW TOTAL
                </Button>
        </Center>
    );
};
export default PlaceOrderModel