import React from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from "react-native";
import StyledText from "./StyledText";
import theme from "../theme";

const NoticeItem = (props) => {
  const { id, image, title, site, date, assessment } = props;
  const press = () => {
    Alert.alert("Hola");
  };

  const parserTousands = value => {
    return value >= 1000? `${Math.round(value / 1000) / 1}k` : value
    }
    
  return (
    <View key={id} style={styles.card}>
      <View
        style={{
          width: "50%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image style={styles.imageCard} source={{ uri: image }} />
      </View>
      <View
        style={{ height: "100%", width: "50%", justifyContent: "space-evenly" }}
      >
        <View style={{ alignItems: "center", height:'50%', justifyContent:'space-evenly' }}>
          <StyledText>{title}</StyledText>
          {site && <StyledText fontWeight="normal">Lugar: {site}</StyledText>}
        </View>
        <View style={{ alignItems: "center", height:'50%', justifyContent:'space-around'  }}>
          <StyledText fontWeight='normal'>Opiniones: {parserTousands(assessment)}</StyledText>
          <TouchableHighlight onPress={press} underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>Detalles</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      {/* <StyledText fontWeight='normal' fontSize='small'>{date}</StyledText> */}
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    margin: 0,
    width: "95%",
    marginBottom: 8,
    backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "center",
    height: 170,
    flexDirection: "row",
    borderRadius: 10,
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
    borderRadius: 10,
  },
  button: {
    marginBottom: 2,
    width: "60%",
    alignItems: "center",
    backgroundColor: "#2196F3",
  },
  buttonText: {
    textAlign: "center",
    padding: 8,
    color: "white",
  },
});
export default NoticeItem;
