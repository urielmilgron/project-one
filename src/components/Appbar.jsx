import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import StyledText from './StyledText'
import Constants from 'expo-constants'
import theme from '../theme'
import { Link } from 'react-router-native'

const styles = StyleSheet.create({
  appBar:{
    backgroundColor:theme.appBar.primary,
    paddingTop:Constants.statusBarHeight + 10, //Le decimos que depende del status bar y también que le sume 10px
    flexDirection:'row',
  }, scroll:{
    paddingBottom:15
  },text:{
    color:theme.appBar.textPrimary,
    fontWeight: theme.fontWeights.bold,
   paddingHorizontal:15
  }
})

const AppBarTab = ({active, children, to}) => {
  return (
    <Link to={to}>
      <StyledText style={styles.text}>{children}</StyledText>
    </Link>
  )
}

export default function Appbar() {
  return (
    <View style={styles.appBar}>
      <ScrollView horizontal style={styles.scroll}>
      <AppBarTab active to='/'>Destinos</AppBarTab>
      <AppBarTab active to='/signin'>Sign in</AppBarTab>
      </ScrollView>
    </View>
  )
}
