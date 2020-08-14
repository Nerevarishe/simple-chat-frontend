import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import BaseButtonStyled from "./BaseButtonStyled";
import BaseButtonTextStyled from "./BaseButtonTextStyled";

const BaseButton = ({
  iconClassName,
  buttonText,
  navigateToPath,
  additionAction,
}) => {
  let history = useHistory();

  const onClickHandler = (additionActions, navigateToPath) => {
    try {
      additionActions();
    } catch (e) {
      console.log(e);
    }
    history.push(navigateToPath);
  };

  return (
    <BaseButtonStyled
      onClick={() => onClickHandler(additionAction, navigateToPath)}
    >
      <span className={iconClassName} />
      <BaseButtonTextStyled>{buttonText}</BaseButtonTextStyled>
    </BaseButtonStyled>
  );
};

BaseButton.propTypes = {
  iconClassName: PropTypes.string,
  buttonText: PropTypes.string,
  navigateToPath: PropTypes.string,
  additionAction: PropTypes.func,
};

BaseButton.defaultProps = {
  navigateToPath: "/",
  additionAction: () => null,
};
export default BaseButton;
