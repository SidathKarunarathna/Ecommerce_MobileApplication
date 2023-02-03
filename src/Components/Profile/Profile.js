import { Box, FormControl, Input, ScrollView, VStack } from "native-base";
import React from "react";
import Colors from "../../color";

export default function Profile() {
  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              USERNAME
            </FormControl.Label>
            <Input
              borderWidth={0}
              bg={Colors.subGreen}
              py={3}
              color={Colors.main}
              fontSize={20}
            />
          </FormControl>
        </VStack>
      </ScrollView>
    </Box>
  );
}
