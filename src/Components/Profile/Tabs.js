import { View, Text, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { SceneMap, ScreenMap } from "react-native-tab-view";

const renderScene = SceneMap({
  first: Profile,
  second: Order,
});

export default function Tabs() {
  const layout = useWindowDimensions();
  const [index, serIndex] = useState(0);
  const [routes] = useState([
    {
      key: "first",
      title: "PROFILE",
    },
    {
      key: "seconf",
      title: "ORDERS",
    },
  ]);
  return (
    <View>
      <Text>Tabs</Text>
    </View>
  );
}
