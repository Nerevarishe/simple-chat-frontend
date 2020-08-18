import React from "react";
import PropTypes from "prop-types";
import ChatMessageCardStyled from "./ChatMessageCardStyled";
import User from "../../User";
import ChatMessage from "./ChatMessage";

const ChatMessageCard = ({
  username,
  userAvatarUrl,
  message,
  messageSender,
}) => {
  return (
    <ChatMessageCardStyled>
      <User
        username={username}
        avatarUrl={userAvatarUrl}
        messageCard={messageSender}
      />
      <ChatMessage message={message} />
    </ChatMessageCardStyled>
  );
};

ChatMessage.propTypes = {
  username: PropTypes.string.isRequired,
  userAvatarUrl: PropTypes.string,
  messageSender: PropTypes.string,
  message: PropTypes.string.isRequired,
};

ChatMessage.defaultProps = {
  username: "",
};

export default ChatMessageCard;
