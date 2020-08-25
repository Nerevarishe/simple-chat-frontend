import React from "react";
import PropTypes from "prop-types";
import BaseInputStyled from "./BaseInputStyled";

const BaseInput = ({ type, placeholder, _style, onChangeHandler, data }) => {
  return (
    <BaseInputStyled
      as={_style}
      type={type}
      placeholder={placeholder}
      onChange={onChangeHandler}
      value={data}
    />
  );
};

BaseInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  _style: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
  onChangeHandler: PropTypes.func,
  value: PropTypes.string,
};

BaseInput.defaultProps = {
  type: "text",
  placeholder: "",
  _style: "",
  onChangeHandler: () => null,
  value: "",
};

export default BaseInput;
