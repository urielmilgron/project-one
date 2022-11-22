import React from "react";
import { View, Text } from "react-native";
import NoticeList from "./NoticeList";
import Appbar from "./Appbar";
import { Switch, Route, Redirect } from "react-router-native";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <Appbar />
      <Switch>
        <Route path='/' exact>
          <NoticeList />
        </Route>
        <Route path='/signin'>
        <Text>En curso</Text>
        </Route>
        <Redirect to='/'/>
      </Switch>
    </View>
  );
};

export default Main;
