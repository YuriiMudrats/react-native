import React, { Component } from "react";
import { View } from "react-native";
import { Container, Header, Content, Form, Item } from "native-base";

import SignInForm from "../../containers/LoginForm";
import ButtonPage from "../../components/ButtonPage";

import styles from "./style";

export default class LoginScreen extends Component {
  onPress = e => {
    console.log(e.nativeEvent);
  };
  render() {
    return (
      <View style={styles.LoginView}>
        <Header style={styles.LoginScreen} />
        <Container style={styles.Container}>
          <SignInForm />
          <ButtonPage onPress={this.onPress} text="SignIn" />
        </Container>
      </View>
    );
  }
}
