import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  ScrollView,
  Spacer,
  Text,
  View,
} from "native-base";
import React, { useState } from "react";
import Colors from "../color";
import NumericInput from "react-native-numeric-input";
import Review from "../Components/Products/Review";
// import Rating from "../Components/Home/Rating";

function SingleProductScreen() {
  const [value, setValue] = useState(0);
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/Images/WhiteSugar.jpg")}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          White Sugar
        </Heading>
        {/* <Rating value={4} /> */}
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput
            value={value}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={10}
            minValue={0}
            borderColor={Colors.deepGray}
            rounded
            textColor={Colors.black}
            iconStyle={{ color: Colors.white }}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
          />
          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            Rs.500
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={13}>
          In the case of the Iran SSL ban, it is possible to run a proxy on the
          arbitrary free port on your localhost and then reconfigure the git
          proxy setting. For example, I use the Psiphon to run a proxy by
          changing the setting shown in the image: In the case of the Iran SSL
          ban, it is possible to run a proxy on the arbitrary free port on your
          localhost and then reconfigure the git proxy setting. For example, I
          use the Psiphon to run a proxy by changing the setting shown in the
          image:
        </Text>
        <Button bg={Colors.main} color={Colors.white} mt={10}>
          Add To Cart
        </Button>
        {/* review */}
        <Review />
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;
