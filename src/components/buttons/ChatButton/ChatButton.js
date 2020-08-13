import React from "react";
import BaseButton from "../BaseButton";

const ChatButton = ({ children }) => {
  return (
    <BaseButton>
      <span className="icon-chat-icon" />
    </BaseButton>
  );
};

export default ChatButton;
