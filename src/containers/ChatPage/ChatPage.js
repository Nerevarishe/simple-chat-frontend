import React from "react";
import ChatMessageCard from "../../components/cards/ChatMessageCard";
import avatar from "../../assets/img/svg/avatar.svg";
import ChatMessageCardsPosition from "../../components/cards/ChatMessageCard/ChatMessageCardsPosition";

const chatMessages = [
  {
    user: {
      username: "John Doe",
      avatarUrl: avatar,
    },
    message: {
      id: 1,
      messageBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
        "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
        "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla " +
        "pariatur. Excepteur sint occaecat cupidatat non proident, sunt in " +
        "culpa qui officia deserunt mollit anim id est laborum.",
    },
  },
  {
    user: {
      username: "Jane Doe",
      avatarUrl: avatar,
    },
    message: {
      id: 2,
      messageBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
        "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
        "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla " +
        "pariatur. Excepteur sint occaecat cupidatat non proident, sunt in " +
        "culpa qui officia deserunt mollit anim id est laborum.",
    },
  },
];

const ChatPage = () => {
  return (
    <ChatMessageCardsPosition>
      {chatMessages.map((element) => (
        <ChatMessageCard
          key={element.message.id}
          username={element.user.username}
          userAvatarUrl={element.user.avatarUrl}
          message={element.message.messageBody}
        />
      ))}
    </ChatMessageCardsPosition>
  );
};

export default ChatPage;
