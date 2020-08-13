import React from "react";
import PropTypes from "prop-types";
import BaseButtonStyled from "./BaseButtonStyled";
import BaseButtonTextStyled from "./BaseButtonTextStyled";

const BaseButton = ({ iconClassName, buttonText }) => {
  return (
    <BaseButtonStyled>
      <span className={iconClassName} />
      <BaseButtonTextStyled>{buttonText}</BaseButtonTextStyled>
    </BaseButtonStyled>
  );
};

BaseButton.propTypes = {
  iconClassName: PropTypes.string,
  buttonText: PropTypes.string
}

export default BaseButton;
