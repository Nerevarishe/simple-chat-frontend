import React from "react";
import FooterPosition from "./FooterPosition";
import FooterStyled from "./FooterStyled";
import ChatButton from "../../../components/buttons/ChatButton";
import PeopleButton from "../../../components/buttons/PeopleButton";
import ChatListButton from "../../../components/buttons/ChatListButton";

const Footer = () => {
  return (
    <FooterPosition>
      <FooterStyled>
        <ChatButton />
        <PeopleButton />
        <ChatListButton />
      </FooterStyled>
    </FooterPosition>
  );
};

export default Footer;
