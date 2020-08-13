import React from "react";
import PropTypes from "prop-types";
import UserPosition from "./UserPosition";
import UserStyled from "./UserStyled";
import Avatar from "../Avatar";
import { Bold14Font } from "../fonts/Fonts";
import { withTheme } from "styled-components";
import UserUsernameWrapper from "./UserUsernameWrapper";

const User = ({avatarUrl, username, myUser, oppositeUser, theme }) => {
  return (
    <UserPosition>
      <UserStyled>
        <Avatar imgUrl={avatarUrl} />
        <UserUsernameWrapper>
          <Bold14Font style={{ color: theme.colors.whiteColor }}>
            {username}
          </Bold14Font>
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
