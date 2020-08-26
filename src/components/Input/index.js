import React from 'react';
import { StyledInput } from './styles';

function Input({ icon, type, value, placeholder, setInputValue }) {
  return (



    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setInputValue(e.target.value)}
    />

  );
}

export default Input;
