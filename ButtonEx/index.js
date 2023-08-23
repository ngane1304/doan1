import React, { Component } from "react";
import {
  View,
  Text,
  AppRegistry,
  StyleSheet,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import Button from "react-native-button";
import styles from "./style";
export default class ButtonEx extends Component {
  _onPressButton = () => {
    Alert.alert(
      "Title",
      "Message",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={this._onPressButton}>
          <View>
            <Button
              style={{
                fontSize: 20,
                color: "black",
                backgroundColor: "white",
                borderColor: "grey",
                borderWidth: 1,
                paddingHorizontal: "30%",
                paddingVertical: 10,
              }}
              onPress={this._onPressButton}
            >
              Đăng xuất
            </Button>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
AppRegistry.registerComponent("tutorialproject", () => ButtonEx);
