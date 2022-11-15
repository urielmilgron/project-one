import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import data from "../ApiSimulator/data";
import NoticeItem from "./NoticeItem";

const NoticeList = () => {
  return (
    <FlatList data={data} renderItem={({item: notice}) => (
     <NoticeItem {...notice}/>
    )}>

    </FlatList>
  );
};

export default NoticeList
