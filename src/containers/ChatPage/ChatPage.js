import React, { Fragment, useEffect, useState } from "react";
import io from "socket.io-client";
import ChatMessageCard from "../../components/cards/ChatMessageCard";
import avatar from "../../assets/img/svg/avatar.svg";
import ChatMessageCardsPosition from "../../components/cards/ChatMessageCard/ChatMessageCardsPosition";
import TypeMessageForm from "../../components/inputs/TypeMessageForm";

const chatMessages = [
  {
    user: {
      username: "John Doe",
      avatarUrl: avatar,
    },
    message: {
      id: 1,
      messageSender: "myMessage",
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
      messageSender: "responseMessage",
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
      username: "John Doe",
      avatarUrl: avatar,
    },
    message: {
      id: 3,
      messageSender: "myMessage",
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
      id: 4,
      messageSender: "responseMessage",
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
      username: "John Doe",
      avatarUrl: avatar,
    },
    message: {
      id: 5,
      messageSender: "myMessage",
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
      id: 6,
      messageSender: "responseMessage",
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
      username: "John Doe",
      avatarUrl: avatar,
    },
    message: {
      id: 7,
      messageSender: "myMessage",
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
      id: 8,
      messageSender: "responseMessage",
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

const socketio = io("http://127.0.0.1:5000/chat");

const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(chatMessages);

  const onChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const submitMessageHandler = (event) => {
    socketio.emit("send_message", message);
    setMessage("");
    event.preventDefault();
  };

  useEffect(() => {
    const socketio = io("http://127.0.0.1:5000/chat");
    socketio.on("send_message", (data) => {
      setResponse(prevState => [...prevState, data]);
    });
    return () => socketio.disconnect();
  }, []);

  return (
    <Fragment>
      <ChatMessageCardsPosition>
        {response.map((element) => (
          <ChatMessageCard
            key={element.message.id}
            username={element.user.username}
            userAvatarUrl={element.user.avatarUrl}
            messageSender={element.message.messageSender}
            message={element.message.messageBody}
          />
        ))}
      </ChatMessageCardsPosition>
      <TypeMessageForm
        formSubmitHandler={submitMessageHandler}
        onChangeHandler={onChangeHandler}
        data={message}
      />
    </Fragment>
  );
};

export default ChatPage;
