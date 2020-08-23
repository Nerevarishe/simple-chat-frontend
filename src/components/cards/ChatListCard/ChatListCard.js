import React from "react";
import PropTypes from "prop-types";
import ChatListCardStyled from "./ChatListCardStyled";
import ChatListCardChatNamePosition from "./ChatListCardChatNamePosition";
import { Regular14Font } from "../../fonts/Fonts";
import PeoplesCounter from "../../PeoplesCounter/PeoplesCounter";

const ChatListCard = ({ chatName, peoplesCount }) => {
  return (
    <ChatListCardStyled>
      <ChatListCardChatNamePosition>
        <Regular14Font>{chatName}</Regular14Font>
      </ChatListCardChatNamePosition>
      <PeoplesCounter peoplesCount={peoplesCount} />
    </ChatListCardStyled>
  );
};

ChatListCard.propsType = {
  chatName: PropTypes.string.isRequired,
  peoplesCount: PropTypes.number.isRequired,
};

export default ChatListCard;
