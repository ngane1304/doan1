import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from "react-native-button";
import { NavigationContainer } from '@react-navigation/native';
import Login from './components/User/login/index';
import User from "./components/User";
import UserNoLogin from "./components/UserNoLogin";
import MyTab from "./components/home";
import ButtonEx from "./ButtonEx";
import Setting from "./components/User/setting/index";
import Thongbao from "./components/annoucement/index";
export default function App() {
  return (
    /*<View style={{flex:1}}>
        <Login />
    </View>*/
    <View style={{flex:1}}>
        <User />
    </View>
    /*<View style={{flex:1}}>
      <UserNoLogin />
    </View>*/
    /*<View style={{flex:1}}>
      <SignUp />
    </View>*/
    /*<View style={{flex:1}}>
        <Thongbao />
    </View>*/
    /*<View style={{flex:1}}>
      <ButtonEx />
    </View>*/
    /*<View style={{flex:1}}>
      <Setting />
    </View>*/
  );
};
