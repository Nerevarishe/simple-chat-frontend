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
  _style,
  buttonType,
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
      as={_style}
      onClick={() => onClickHandler(additionAction, navigateToPath)}
      type={buttonType}
    >
      <span className={iconClassName} />
      {/*<BaseButtonTextStyled>{buttonText}</BaseButtonTextStyled>*/}
      {buttonText ? (
        <BaseButtonTextStyled>{buttonText}</BaseButtonTextStyled>
      ) : null}
    </BaseButtonStyled>
  );
};

BaseButton.propTypes = {
  iconClassName: PropTypes.string,
  buttonText: PropTypes.string,
  navigateToPath: PropTypes.string,
  additionAction: PropTypes.func,
  _style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
  buttonType: PropTypes.oneOf(["button", "submit", "reset"]),
};

BaseButton.defaultProps = {
  navigateToPath: "/",
  additionAction: () => null,
  _style: "",
  buttonType: "button",
};
export default BaseButton;
