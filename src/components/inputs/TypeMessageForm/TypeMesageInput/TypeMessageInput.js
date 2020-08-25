import React from "react";
import TypeMessageInputStyled from "./TypeMessageInputStyled";
import BaseInput from "../../BaseInput";

const TypeMessageInput = ({ onChangeHandler, data }) => {
  return (
    <BaseInput
      _style={TypeMessageInputStyled}
      type="text"
      placeholder="Type message here..."
      onChangeHandler={onChangeHandler}
      data={data}
    />
  );
};

export default TypeMessageInput;
