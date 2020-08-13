import React, { useContext } from "react";
import { withTheme } from "styled-components";
import HeaderPosition from "./HeaderPosition";
import HeaderStyled from "./HeaderStyled";
import HeaderAvatarWrapper from "./HeaderAvatarWrapper";
import Avatar from "../../../components/Avatar";
import HeaderUsernameWrapper from "./HeaderUsernameWrapper";
import { Bold14Font } from "../../../components/fonts/Fonts";
import LogoutButton from "../../../components/buttons/LogoutButton";
import HeaderLogoutButtonWrapper from "./HeaderLogoutButtonWrapper";
import HeaderNavigationButtonsPosition from "./HeaderNavigationButtonsPosition";
import NavigationButtonsBlock from "../../../components/buttons/NavigationButtonsBlock";
import { TOGGLE_HEADER_SIDE_BAR } from "../../../globalStore/actions";

import avatarImg from "../../../assets/img/svg/avatar.svg";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { Context } from "../../../globalStore/store";

const Header = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { width, height } = useWindowDimensions();
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(Context);

  const toggleSidebarHandler = () => {
    if (width >= 1200) {
      dispatch({ type: TOGGLE_HEADER_SIDE_BAR });
      // console.log("isHeaderSideBarPulled: " + !state.components.header.isHeaderSideBarPulled)
    }
  };

  return (
    <HeaderPosition
      onMouseEnter={toggleSidebarHandler}
      onMouseLeave={toggleSidebarHandler}
    >
      <HeaderStyled>
        <HeaderAvatarWrapper>
          <Avatar imgUrl={avatarImg} />
        </HeaderAvatarWrapper>
        <HeaderUsernameWrapper>
          <Bold14Font style={{ color: props.theme.colors.whiteColor }}>
            John Doe
          </Bold14Font>
        </HeaderUsernameWrapper>
        <HeaderNavigationButtonsPosition>
          <NavigationButtonsBlock />
        </HeaderNavigationButtonsPosition>
        <HeaderLogoutButtonWrapper>
          <LogoutButton />
        </HeaderLogoutButtonWrapper>
      </HeaderStyled>
    </HeaderPosition>
  );
};

export default withTheme(Header);
