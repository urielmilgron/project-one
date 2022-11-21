import React from "react";
import { View } from "react-native";
import NoticeList from "./NoticeList";
import Appbar from "./Appbar";

const Main = () => {
  return (
    <View style={{flex:1}}>
      <Appbar />
      <NoticeList />
    </View>
  );
};

export default Main;
