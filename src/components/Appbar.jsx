import React from 'react'
import { View, StyleSheet } from 'react-native'
import StyledText from './StyledText'
import Constants from 'expo-constants'
import theme from '../theme'

const styles = StyleSheet.create({
  appBar:{
    backgroundColor:theme.appBar.primary,
    paddingTop:Constants.statusBarHeight + 10, //Le decimos que depende del status bar y también que le sume 10px
    paddingBottom:10,
    paddingLeft:10,
  }, text:{
    color:theme.appBar.textPrimary
  }
})


export default function Appbar() {
  return (
    <View style={styles.appBar}>
      <StyledText color='secondary'>Destinos</StyledText>
    </View>
  )
}
