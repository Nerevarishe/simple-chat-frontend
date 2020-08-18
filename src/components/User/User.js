import React from "react";
import PropTypes from "prop-types";
import UserPosition from "./UserPosition";
import UserStyled from "./UserStyled";
import Avatar from "../Avatar";
import { withTheme } from "styled-components";
import UserUsernameWrapper from "./UserUsernameWrapper";
import UserAvatarWrapper from "./UserAvatarWrapper";

const User = ({ avatarUrl, username, messageCard, theme }) => {
  return (
    <UserPosition>
      <UserStyled>
        <UserAvatarWrapper>
          <Avatar imgUrl={avatarUrl} />
        </UserAvatarWrapper>
        <UserUsernameWrapper
          style={{
            color: messageCard
              ? theme.colors.blackColor
              : theme.colors.whiteColor,
          }}
          type={messageCard ? "true" : "false"}
        >
          {username}
        </UserUsernameWrapper>
      </UserStyled>
    </UserPosition>
  );
};

User.propTypes = {
  avatarUrl: PropTypes.string,
  username: PropTypes.string,
  messageCard: PropTypes.bool,
};

export default withTheme(User);
