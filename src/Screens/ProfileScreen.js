import { Center, Icon, Image, Text, View } from "native-base";
import React from "react";
import Colors from "../color";

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
      </Center>
    </>
  );
}
export default ProfileScreen;
