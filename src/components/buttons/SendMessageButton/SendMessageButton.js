import React from "react";
import SendMessageButtonStyled from "./SendMessageButtonStyled";

const SendMessageButton = () => {
  return (
    <SendMessageButtonStyled type="submit">
      <span className="icon-send-button" />
    </SendMessageButtonStyled>
  );
};

export default SendMessageButton;
