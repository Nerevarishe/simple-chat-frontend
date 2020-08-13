import React from "react";
import BaseButton from "../BaseButton";

const ChatButton = () => {
  return (
    <BaseButton
      iconClassName="icon-chat-icon"
      buttonText="Current chat"
      navigateToPath="/chat_page"
    />
  );
};

export default ChatButton;
