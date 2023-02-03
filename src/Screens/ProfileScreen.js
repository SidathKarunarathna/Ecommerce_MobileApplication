import { Center, Heading, Icon, Image, Text, View } from "native-base";
import React from "react";
import Colors from "../color";
import Tabs from "../Components/Profile/Tabs";

function ProfileScreen() {
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Image
          source={require("../../assets/user.png")}
          alt="Profile"
          w={24}
          h={24}
          resizeMode="cover"
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          Admin Doe
        </Heading>
        <Text italic fontSize={10} color={Colors.white}>
          Joined Dec 12 2022
        </Text>
      </Center>
      {/* TABS */}
      <Tabs />
    </>
  );
}
export default ProfileScreen;
