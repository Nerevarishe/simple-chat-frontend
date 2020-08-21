import React from "react";
import TypeMessageInputStyled from "./TypeMessageInputStyled";
import BaseInput from "../../BaseInput";

const TypeMessageInput = () => {
  return (
    <BaseInput
      _style={TypeMessageInputStyled}
      type="text"
      placeholder="Type message here..."
    />
  );
};

export default TypeMessageInput;
