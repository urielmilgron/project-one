import React from "react"
import { Image, View, Text, StyleSheet } from "react-native"

const NoticeItem = (props) => {
    const {id, image, title, site, date} = props
return (
    <View key={id} style={styles.card}>
    <Image style={styles.imageCard} source={{uri:image}}/>
    <Text style={styles.title}>
    {title}
    </Text>
    {site? <Text>{site}</Text> : ''}
    <Text>{date}</Text>
    </View>
)
}
const styles = StyleSheet.create({
    card:{
      margin:20,
      marginBottom:40,
      backgroundColor:'"aliceblue"',
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
      imageCard: {
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
  export default NoticeItem