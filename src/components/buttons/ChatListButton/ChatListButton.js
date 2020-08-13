import React from "react";
import BaseButton from "../BaseButton";

const ChatListButton = () => {
  return (
    <BaseButton
      iconClassName="icon-chat-list-icon"
      buttonText="Chat list"
      navigateToPath="/chat_list_page"
    />
  );
};

export default ChatListButton;
