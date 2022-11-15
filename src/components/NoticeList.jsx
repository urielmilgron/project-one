import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import data from "../ApiSimulator/data";

const NoticeList = () => {
  return (
    <FlatList data={data} renderItem={({item: notice}) => (
      <View key={notice.id} style={styles.card}>
      <Image style={styles.tinyLogo} source={{uri:notice.image}}/>
      <Text style={styles.title}>
      {notice.title}
      </Text>
      {notice.site? <Text>{notice.site}</Text> : ''}
      <Text>{notice.date}</Text>
      </View>
    )}>

    </FlatList>
  );
};
const styles = StyleSheet.create({
  card:{
    margin:20,
    marginBottom:40,
    backgroundColor:"aliceblue",
    justifyContent:"space-around",
    alignItems:"center",
    height:480,
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  },
    tinyLogo: {
        width: 300,
        height: 300,
        borderRadius:10
      },
      title:{
        fontWeight:"bold",
        width:280,
        textAlign:"center",
      }

})
export default NoticeList
