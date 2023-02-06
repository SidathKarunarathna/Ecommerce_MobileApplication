import React, { useState } from "react";
import {
  Box,
  Button,
  CheckIcon,
  FormControl,
  Heading,
  Select,
  Text,
  TextArea,
  VStack,
} from "native-base";
import Colors from "../../color";
import Message from "../Notifications/Message";
import Buttone from "../Profile/Buttone";
// import Rating from "../Home/Rating";

export default function Review() {
  const [ratings, setRatings] = useState("");

  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEW
      </Heading>
      {/* empty review */}
      <Message
        color={Colors.main}
        bg={Colors.deepGray}
        // size={10}
        bold
        children={"No Review"}
      />
      {/* has review */}
      <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          Kosala Chamithri
        </Heading>
        {/* <Rating value={4} /> */}
        <Text my={2} fontSize={11}>
          Feb 3 2023
        </Text>
        <Message
          color={Colors.black}
          bg={Colors.white}
          size={10}
          children={
            "Usage of fractions is recommended when more precision is needed"
          }
        />
      </Box>
      {/* write review */}
      <Box mt={6}>
        <Heading fontSize={15} color={Colors.black} mb={4}>
          REVIEW THIS PRODUCT
        </Heading>
        <VStack space={6}>
          {/* <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Rating
            </FormControl.Label>
            <Select
              bg={Colors.subGreen}
              borderWidth={0}
              rounded={5}
              py={4}
              placeholder="Choose Rating"
              selectedValue={ratings}
              onValueChange={(value) => setRatings(value)}
              _selectedItem={{
                bg: Colors.subGreen,
                endIcon: <CheckIcon size={3} />,
              }}
            >
              <Select.Item label="Poor" value="1" />
              <Select.Item label="Fair" value="2" />
              <Select.Item label="Good" value="3" />
            </Select>
          </FormControl> */}
          {/* <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Comment
            </FormControl.Label>
            <TextArea
              h={24}
              w="full"
              placeholder="This is a good poduct....."
              borderWidth={0}
              bg={Colors.subGreen}
              py={4}
              _focus={{
                bg: Colors.subGreen,
              }}
            />
          </FormControl> */}
          <Buttone bg={Colors.main} color={Colors.white}>
            SUBMIT
          </Buttone>
          {/* if not logged in */}
          <Message
            color={Colors.white}
            bg={Colors.black}
            children={"Please 'Login' to write a review"}
          />
        </VStack>
      </Box>
    </Box>
  );
}
