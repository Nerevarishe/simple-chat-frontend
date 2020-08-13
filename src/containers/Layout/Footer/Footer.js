import React from "react";
import FooterPosition from "./FooterPosition";
import FooterStyled from "./FooterStyled";
import ChatButton from "../../../components/buttons/ChatButton";
import PeopleButton from "../../../components/buttons/PeopleButton";
import ChatListButton from "../../../components/buttons/ChatListButton";
import FooterButtonWrapper from "./FooterButtonWrapper";

const Footer = () => {
  return (
    <FooterPosition>
      <FooterStyled>
        <FooterButtonWrapper>
          <ChatButton />
        </FooterButtonWrapper>
        <FooterButtonWrapper>
          <PeopleButton />
        </FooterButtonWrapper>
        <FooterButtonWrapper>
          <ChatListButton />
        </FooterButtonWrapper>
      </FooterStyled>
    </FooterPosition>
  );
};

export default Footer;
