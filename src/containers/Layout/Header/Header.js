import React from "react";
import { withTheme } from "styled-components";
import HeaderPosition from "./HeaderPosition";
import HeaderStyled from "./HeaderStyled";
import HeaderAvatarWrapper from "./HeaderAvatarWrapper";
import Avatar from "../../../components/Avatar";
import HeaderUsernameWrapper from "./HeaderUsernameWrapper";
import { Bold14Font } from "../../../components/fonts/Fonts";
import HeaderSideBar from "./HeaderSideBar/HeaderSideBar";

const Header = (props) => {
  return (
    <HeaderPosition>
      <HeaderStyled>
        <HeaderAvatarWrapper>
          <Avatar imgUrl={"LINK_TO_IMG"} />
        </HeaderAvatarWrapper>
        <HeaderUsernameWrapper>
          <Bold14Font style={{ color: props.theme.colors.whiteColor }}>
            John Doe
          </Bold14Font>
        </HeaderUsernameWrapper>
        <HeaderSideBar/>
      </HeaderStyled>
    </HeaderPosition>
  );
};

export default withTheme(Header);
