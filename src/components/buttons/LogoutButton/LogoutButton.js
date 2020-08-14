import React, { useContext } from "react";
import BaseButton from "../BaseButton/BaseButton";
import { Context } from "../../../globalStore/store";
import { LOGOUT } from "../../../globalStore/actions";

const LogoutButton = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(Context);

  return (
    <BaseButton
      iconClassName="icon-logout-icon"
      buttonText="Logout"
      navigateToPath="/login_page"
      additionAction={() => dispatch({ type: LOGOUT })}
    />
  );
};

export default LogoutButton;
