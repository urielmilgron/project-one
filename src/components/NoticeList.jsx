import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import data from "../ApiSimulator/data";
import NoticeItem from "./NoticeItem";

const NoticeList = () => {
  return (
    <FlatList contentContainerStyle={styles.container} data={data} renderItem={({item: notice}) => (
     <NoticeItem {...notice}/>
    )}>

    </FlatList>
  );
};

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    minHeight:750,
    justifyContent:'space-around'
  }
})
export default NoticeList
