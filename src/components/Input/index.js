import React, { PureComponent } from "react";
import { Input } from "native-base";

// import PropTypes from "prop-types";

export default class InputField extends PureComponent {
  render() {
    const { name, placeholder, onChangeText } = this.props;
    return (
      <Input
        onChangeText={onChangeText}
        name={name}
        placeholder={placeholder}
      />
    );
  }
}

// InputField.propTypes = {
//   onChange: PropTypes.func,
//   inputName: PropsTypes.string,
//   placeholder: PropsTypes.string
// };
