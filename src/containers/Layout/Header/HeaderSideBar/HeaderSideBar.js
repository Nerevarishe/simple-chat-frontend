import React from "react";
import HeaderSideBarStyled from "./HeaderSideBarStyled";
import HeaderSideBarItem from "./HeaderSideBarItem";

const sideBarItems = [
  {
    id: 1,
    buttonIconClass: "icon-chat-icon",
    buttonText: "Current chat",
  },
  {
    id: 2,
    buttonIconClass: "icon-people-icon",
    buttonText: "Users in chat",
  },
  {
    id: 3,
    buttonIconClass: "icon-chat-list-icon",
    buttonText: "Chat List",
  },
];

const HeaderSideBar = () => {
  return (
    <HeaderSideBarStyled>
      {sideBarItems.map((item) => (
        <HeaderSideBarItem
          key={item.id}
          buttonIconClass={item.buttonIconClass}
          buttonText={item.buttonText}
        />
      ))}
    </HeaderSideBarStyled>
  );
};

export default HeaderSideBar;
