import React, { Component } from "react";
import { Container, Header, Content, Form, Item } from "native-base";

import Input from "../../components/Input";

export default class SignInForm extends Component {
  onPress = e => {
    console.log(e.nativeEvent);
  };
  render() {
    return (
      <Form>
        <Item>
          <Input
            onChangeText={value => console.log(value)}
            name="username"
            placeholder="Username"
          />
        </Item>
        <Item>
          <Input name="email" placeholder="Email" />
        </Item>
        <Item>
          <Input name="password" placeholder="Password" />
        </Item>
        <Item>
          <Input name="confirmPassword" placeholder="Username" />
        </Item>
      </Form>
    );
  }
}
