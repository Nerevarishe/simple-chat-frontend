import React, { useContext } from "react";
import HeaderPosition from "./HeaderPosition";
import HeaderStyled from "./HeaderStyled";
import LogoutButton from "../../../components/buttons/LogoutButton";
import HeaderLogoutButtonWrapper from "./HeaderLogoutButtonWrapper";
import HeaderNavigationButtonsPosition from "./HeaderNavigationButtonsPosition";
import NavigationButtonsBlock from "../../../components/buttons/NavigationButtonsBlock";
import { TOGGLE_HEADER_SIDE_BAR } from "../../../globalStore/actions";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { Context } from "../../../globalStore/store";
import User from "../../../components/User";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const { width, height } = useWindowDimensions();
  const [state, dispatch] = useContext(Context);

  const toggleSidebarHandler = () => {
    if (width >= 1200) {
      dispatch({ type: TOGGLE_HEADER_SIDE_BAR });
    }
  };

  return (
    <HeaderPosition
      onMouseEnter={toggleSidebarHandler}
      onMouseLeave={toggleSidebarHandler}
    >
      <HeaderStyled>
        <User avatarUrl={state.auth.avatarUrl} username={state.auth.username} />
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

export default Header;
