import React from "react";
import PropTypes from "prop-types";
import UserStyled from "./UserStyled";
import Avatar from "../Avatar";
import UserUsernameWrapper from "./UserUsernameWrapper";
import UserAvatarWrapper from "./UserAvatarWrapper";
import { Bold14Font, Regular10Font } from "../fonts/Fonts";

const User = ({ avatarUrl, username, messageCard }) => {
  return (
    <UserStyled>
      <UserAvatarWrapper>
        <Avatar imgUrl={avatarUrl} />
      </UserAvatarWrapper>
      <UserUsernameWrapper
        as={messageCard ? Regular10Font : Bold14Font}
        messageCard={messageCard}
      >
        {username}
      </UserUsernameWrapper>
    </UserStyled>
  );
};

User.propTypes = {
  avatarUrl: PropTypes.string,
  username: PropTypes.string,
  messageCard: PropTypes.oneOf([null, "myMessage", "responseMessage"]),
};

User.defaultProps = {
  messageCard: null,
};

export default User;
