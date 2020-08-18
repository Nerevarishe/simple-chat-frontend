import React from "react";
import PropTypes from "prop-types";
import ChatMessagePosition from "./ChatMessagePosition";
import ChatMessageStyled from "./ChatMessageStyled";

const ChatMessage = ({ message }) => {
  return (
    <ChatMessagePosition>
      <ChatMessageStyled as="p">{message}</ChatMessageStyled>
    </ChatMessagePosition>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ChatMessage;
