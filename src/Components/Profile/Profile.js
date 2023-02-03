import {
  Box,
  Button,
  FormControl,
  Input,
  ScrollView,
  VStack,
} from "native-base";
import React from "react";
import Colors from "../../color";

const Inputs = [
  {
    Label: "USERNAME",
    type: "text",
  },
  {
    Label: "Email",
    type: "text",
  },
  {
    Label: "NEW PASSWORD",
    type: "password",
  },
  {
    Label: "COMFIRM PASSWORD",
    type: "password",
  },
];

const Profile = () => {
  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {Inputs.map((i, index) => (
            <FormControl key={index}>
              <FormControl.Label
                _text={{
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {i.Label}
              </FormControl.Label>
              <Input
                borderWidth={0.2}
                //borderColor={Colors.main}
                bg={Colors.subGreen}
                py={3}
                type={i.type}
                color={Colors.main}
                fontSize={15}
                _focus={{
                  bg: Colors.subGreen,
                  borderColor: Colors.main,
                  borderWidth: 1,
                }}
              />
            </FormControl>
          ))}

          <Button bg={Colors.main} color={Colors.white} borderRadius={50}>
            UPDATE PROFILE
          </Button>
        </VStack>
      </ScrollView>
    </Box>
  );
};
export default Profile;
