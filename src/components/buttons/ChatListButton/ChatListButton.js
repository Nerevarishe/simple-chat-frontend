import React from "react";
import BaseButton from "../BaseButton";

const ChatListButton = ({ children }) => {
  return (
    <BaseButton>
      <span className="icon-chat-list-icon" />
    </BaseButton>
  );
};

export default ChatListButton;
