import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Header, Content, Form, Item } from "native-base";

import Input from "../../components/Input";
import {} from "../../actions/index";
// import PropTypes from "prop-types";

class SignInForm extends Component {
  render() {
    // const { userName, userPassword } = this.props;
    return (
      <Form>
        <Item>
          <Input
            onChangeText={value => console.log(value)}
            name="email"
            placeholder="Email"
          />
        </Item>
        <Item last>
          <Input name="password" placeholder="Password" />
        </Item>
      </Form>
    );
  }
}

const mapDispatchToProps = {};
export default connect(
  null,
  mapDispatchToProps
)(SignInForm);
