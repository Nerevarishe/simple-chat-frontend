import React from "react";
import HeaderSideBarItemStyled from "./HeaderSideBarItemStyled";
import HeaderSideBarItemIcon from "./HeaderSideBarItemIcon";

const HeaderSideBarItem = ({ buttonImg, buttonText }) => {
  return (
    <HeaderSideBarItemStyled>
      <HeaderSideBarItemIcon className={buttonImg} />
      {buttonText}
    </HeaderSideBarItemStyled>
  );
};

export default HeaderSideBarItem;
