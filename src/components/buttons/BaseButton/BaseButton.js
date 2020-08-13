import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import BaseButtonStyled from "./BaseButtonStyled";
import BaseButtonTextStyled from "./BaseButtonTextStyled";

const BaseButton = ({ iconClassName, buttonText, navigateToPath }) => {
  let history = useHistory();

  return (
    <BaseButtonStyled onClick={() => history.push(navigateToPath)}>
      <span className={iconClassName} />
      <BaseButtonTextStyled>{buttonText}</BaseButtonTextStyled>
    </BaseButtonStyled>
  );
};

BaseButton.propTypes = {
  iconClassName: PropTypes.string,
  buttonText: PropTypes.string,
  navigateToPath: PropTypes.string,
};

export default BaseButton;
