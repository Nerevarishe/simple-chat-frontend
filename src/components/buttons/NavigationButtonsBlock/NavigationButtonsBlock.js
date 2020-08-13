import React from 'react';
import ChatButton from "../ChatButton";
import PeopleButton from "../PeopleButton";
import ChatListButton from "../ChatListButton";
import NavigationButtonWrapper from "./NavigationButtonWrapper";
import NavigationButtonsBlockStyled from "./NavigationButtonsBlockStyled";

const NavigationButtonsBlock = () => {
  return (
    <NavigationButtonsBlockStyled>
      <NavigationButtonWrapper>
        <ChatButton />
      </NavigationButtonWrapper>
      <NavigationButtonWrapper>
        <PeopleButton />
      </NavigationButtonWrapper>
      <NavigationButtonWrapper>
        <ChatListButton />
      </NavigationButtonWrapper>
    </NavigationButtonsBlockStyled>
  );
};

export default NavigationButtonsBlock;
