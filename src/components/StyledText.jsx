import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
    text:{
        fontSize:theme.sizes.body,
        color:theme.colors.textPrimary,
    },
    bold:{
        fontWeight:theme.fontWeights.bold
    },
    big:{
        fontSize:theme.sizes.title
    },
    small:{
        fontSize:theme.sizes.date
    },
    center:{
        textAlign:"center"
    },
    title: {
        width: 280
    }
})

export default function StyleText({bold, big, children, center, small, title}){
    const textStyle = [
        styles.text,
        bold && styles.bold,
        big && styles.big,
        small && styles.small,
        center && styles.center,
        title && styles.title
    ]
    return(
        <Text style={textStyle}>
            {children}
        </Text>
    )
}