import React from "react"
import { Image, View, Text, StyleSheet } from "react-native"
import StyledText from "./StyledText"

const NoticeItem = (props) => {
    const {id, image, title, site, date} = props
return (
    <View key={id} style={styles.card}>
    <View style={{width:'50%', height:'100%', alignItems:'center', justifyContent:'center'}}>
    <Image style={styles.imageCard} source={{uri:image}}/>
    </View>
    <View style={{height:'100%', width:'50%', justifyContent:'space-evenly'}}>
    <StyledText>
    {title}
    </StyledText>
    {site && <StyledText fontWeight='normal'>Lugar: {site}</StyledText>}
    </View>
    {/* <StyledText fontWeight='normal' fontSize='small'>{date}</StyledText> */}
    </View>
)
}
const styles = StyleSheet.create({
    card:{
      margin:20,
      marginBottom:40,
      backgroundColor:'#F2F2F2',
      justifyContent:"space-around",
      alignItems:"center",
      height:170,
      flexDirection:'row',
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
          width: 160,
          height: 160,
          borderRadius:10
        },
  
  })
  export default NoticeItem