import React from "react";
import PropTypes from "prop-types";
import BaseInputStyled from "./BaseInputStyled";

const BaseInput = ({ type, placeholder, _style }) => {
  return <BaseInputStyled as={_style} type={type} placeholder={placeholder} />;
};

BaseInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  _style: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

BaseInput.defaultProps = {
  type: "text",
  placeholder: "",
  _style: "",
};

export default BaseInput;
