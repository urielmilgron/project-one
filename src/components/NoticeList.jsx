import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import data from "../ApiSimulator/data";

const NoticeList = () => {
  return (
    <View style={styles.card}>
      {data.map((notice) => (
        <View key={notice.id}><Text>
            {notice.id}
            </Text>
            <Image style={styles.tinyLogo} source={{uri:notice.image}}/>
            </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
    card:{
        alignItems:"center",
    },
    tinyLogo: {
        width: 200,
        height: 200,
        borderRadius:20
      }

})
export default NoticeList
