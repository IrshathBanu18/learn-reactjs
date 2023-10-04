import React, { Component } from 'react';

interface InputElementProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class InputElement extends Component<InputElementProps> {
  render() {
    const { type, placeholder, value, onChange } = this.props;

    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }
}

export default InputElement;