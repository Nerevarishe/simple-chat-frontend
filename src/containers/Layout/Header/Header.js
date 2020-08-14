import React, { useContext, useEffect } from "react";
import HeaderPosition from "./HeaderPosition";
import HeaderStyled from "./HeaderStyled";
import LogoutButton from "../../../components/buttons/LogoutButton";
import HeaderLogoutButtonWrapper from "./HeaderLogoutButtonWrapper";
import HeaderNavigationButtonsPosition from "./HeaderNavigationButtonsPosition";
import NavigationButtonsBlock from "../../../components/buttons/NavigationButtonsBlock";
import {
  SHOW_HEADER_SIDE_BAR,
  HIDE_HEADER_SIDE_BAR,
} from "../../../globalStore/actions";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { Context } from "../../../globalStore/store";
import User from "../../../components/User";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const { width, height } = useWindowDimensions();
  const [state, dispatch] = useContext(Context);

  // Hide sidebar if screen width <= 1200px:
  useEffect(() => {
    if (width <= 1200) {
      dispatch({ type: HIDE_HEADER_SIDE_BAR });
    }
  }, [dispatch, width]);

  const showSidebarHandler = () => {
    if (width >= 1200) {
      dispatch({ type: SHOW_HEADER_SIDE_BAR });
    }
  };

  const hideSidebarHandler = () => {
    if (width >= 1200) {
      dispatch({ type: HIDE_HEADER_SIDE_BAR });
    }
  };

  return (
    <HeaderPosition
      onMouseEnter={showSidebarHandler}
      onMouseLeave={hideSidebarHandler}
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
