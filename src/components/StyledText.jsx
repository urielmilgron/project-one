import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
    text:{
        fontSize:theme.sizes.body,
        fontWeight: theme.fontWeights.bold,
    
    },
    colorPrimary: {
        color: theme.colors.textPrimary
    },
    colorSecondary: {
      color: theme.colors.textSecondary  
    },
    fontSmall:{
        fontSize:theme.sizes.date
    },
    normalWeight:{
        fontWeight:theme.fontWeights.normal
    },
    title: {
        width: 280
    }
})

export default function StyledText({color, children, fontSize, title, fontWeight, ...restOfProps}){
    const textStyle = [
        styles.text,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontWeight === 'normal' && styles.normalWeight,
        fontSize === 'small' && styles.fontSmall,
        title && styles.title
    ]
    return(
        <Text style={textStyle} {...restOfProps}>
            {children}
        </Text>
    )
}