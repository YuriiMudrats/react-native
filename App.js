import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import LoginScreen from "./src/screens/LoginScreen";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: "skyblue"
  },
  textStyle: {
    color: "red"
  }
});
