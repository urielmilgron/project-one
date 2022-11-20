import React from 'react';
import Constants from 'expo-constants'
import {View, StyleSheet, Text} from 'react-native';
import NoticeList from './NoticeList';

const Main = () => {
    return (
        <View style={{marginTop:Constants.statusBarHeight, backgroundColor:'#F2F2F2', justifyContent:'center', alignItems:'center'}}>
            <NoticeList/>
        </View>
    );
}

const styles = StyleSheet.create({

})

export default Main;
