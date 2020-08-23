import React, { Fragment } from "react";
import ChatListCard from "../../components/cards/ChatListCard/ChatListCard";
import ChatListPageCardPosition from "./ChatListPageCardPosition";

const chatList = [
  {
    id: 1,
    chatName: "Hello!",
    peoplesCount: 10,
  },
  {
    id: 2,
    chatName: "World!",
    peoplesCount: 6,
  },
  {
    id: 3,
    chatName: "IT",
    peoplesCount: 24,
  },
  {
    id: 4,
    chatName: "Devs",
    peoplesCount: 3,
  },
  {
    id: 5,
    chatName: "...",
    peoplesCount: 100,
  },
];

const ChatListPage = () => {
  return (
    <Fragment>
      {chatList.map((el) => (
        <ChatListPageCardPosition>
          <ChatListCard
            key={el.id}
            chatName={el.chatName}
            peoplesCount={el.peoplesCount}
          />
        </ChatListPageCardPosition>
      ))}
    </Fragment>
  );
};

export default ChatListPage;
