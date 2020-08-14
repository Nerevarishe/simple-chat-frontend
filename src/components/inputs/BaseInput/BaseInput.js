import React from "react";
import PropTypes from "prop-types";
import BaseInputStyled from "./BaseInputStyled";

const BaseInput = ({ type, placeholder }) => {
  return <BaseInputStyled type={type} placeholder={placeholder} />;
};

BaseInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

BaseInput.defaultProps = {
  type: "text",
  placeholder: "",
};

export default BaseInput;
