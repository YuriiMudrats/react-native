import React, { Component } from "react";
import { Button, Text } from "native-base";

// import "./style";

export default class ButtonPage extends Component {
  render() {
    const { onPress, text } = this.props;
    return (
      <Button light onPress={onPress}>
        <Text>{text}</Text>
      </Button>
    );
  }
}
