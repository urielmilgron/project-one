import {React, useState} from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import StyledText from './StyledText'
import Constants from 'expo-constants'
import theme from '../theme'
import { Link, useLocation } from 'react-router-native'

const styles = StyleSheet.create({
  appBar:{
    backgroundColor:theme.appBar.primary,
    paddingTop:Constants.statusBarHeight + 10, //Le decimos que depende del status bar y también que le sume 10px
    flexDirection:'row',
  }, scroll:{
    paddingBottom:15
  },text:{
    color:theme.appBar.textDisabled,
    fontWeight: theme.fontWeights.bold,
   paddingHorizontal:15
  }, active: {
    color: theme.appBar.textPrimary,
    fontWeight: theme.fontWeights.bold,
   paddingHorizontal:15
  }
})

const AppBarTab = ({children, to}) => {
  //Obtenemos la ubicación y si pathname es igual a to, se activa el estilo
  const { pathname } = useLocation()
  const active = pathname === to
  const textStyles = [
    styles.text,
    active && styles.active
  ]

  return (
    <Link to={to}>
      <StyledText style={textStyles}>{children}</StyledText>
    </Link>
  )
}

export default function Appbar() {
  return (
    <View style={styles.appBar}>
      <ScrollView horizontal style={styles.scroll}>
      <AppBarTab active to='/'>Destinos</AppBarTab>
      <AppBarTab to='/signin'>Sign in</AppBarTab>
      </ScrollView>
    </View>
  )
}
