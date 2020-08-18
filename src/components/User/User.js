import React from "react";
import PropTypes from "prop-types";
import UserStyled from "./UserStyled";
import Avatar from "../Avatar";
import { withTheme } from "styled-components";
import UserUsernameWrapper from "./UserUsernameWrapper";
import UserAvatarWrapper from "./UserAvatarWrapper";

const User = ({ avatarUrl, username, messageCard, theme }) => {
  return (
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
        >
          {username}
        </UserUsernameWrapper>
      </UserStyled>
  );
};

User.propTypes = {
  avatarUrl: PropTypes.string,
  username: PropTypes.string,
  messageCard: PropTypes.oneOf(["myMessage", "responseMessage"]),
};

export default withTheme(User);
