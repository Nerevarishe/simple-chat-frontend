import React from "react";
import PropTypes from "prop-types";
import ChatMessageCardStyled from "./ChatMessageCardStyled";
import User from "../../User";
import ChatMessage from "./ChatMessage";

const ChatMessageCard = ({ username, userAvatarUrl, message }) => {
  return (
      <ChatMessageCardStyled>
        <User username={username} avatarUrl={userAvatarUrl} messageCard />
        <ChatMessage message={message} />
      </ChatMessageCardStyled>
  );
};

ChatMessage.propTypes = {
  username: PropTypes.string.isRequired,
  userAvatarUrl: PropTypes.string,
  message: PropTypes.string.isRequired,
};

export default ChatMessageCard;
