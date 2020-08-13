import React from "react";
import PropTypes from "prop-types";
import UserPosition from "./UserPosition";
import UserStyled from "./UserStyled";
import Avatar from "../Avatar";
import { withTheme } from "styled-components";
import UserUsernameWrapper from "./UserUsernameWrapper";
import UserAvatarWrapper from "./UserAvatarWrapper";

const User = ({ avatarUrl, username, myUser, oppositeUser, theme }) => {
  return (
    <UserPosition>
      <UserStyled>
        <UserAvatarWrapper>
          <Avatar imgUrl={avatarUrl} />
        </UserAvatarWrapper>
        <UserUsernameWrapper style={{ color: theme.colors.whiteColor }}>
          {username}
        </UserUsernameWrapper>
      </UserStyled>
    </UserPosition>
  );
};

User.propTypes = {
  avatarUrl: PropTypes.string,
  username: PropTypes.string,
};

export default withTheme(User);
