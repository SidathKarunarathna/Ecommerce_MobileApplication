import { Pressable } from "react-native";
import React from "react";
import { Box, Button, HStack, ScrollView, Text } from "native-base";
import Colors from "../../color";

const Orders = () => {
  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            bg={Colors.deepGray}
            py={5}
            px={2}
          >
            <Text fontSize={9} color={Colors.blue} isTruncated>
              154515155454
            </Text>
            <Text fontSize={12} Bold color={Colors.black} isTruncated>
              PAID
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              Dec 12 2022
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.main}
              _text={{ color: Colors.white }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              Rs.500
            </Button>
          </HStack>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            bg={Colors.deepGray}
            py={5}
            px={2}
          >
            <Text fontSize={9} color={Colors.blue} isTruncated>
              154515155454
            </Text>
            <Text fontSize={12} Bold color={Colors.black} isTruncated>
              PAID
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              Dec 12 2022
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.main}
              _text={{ color: Colors.white }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              Rs.500
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
};
export default Orders;
