import React from "react";
import LoginButtonStyled from "./LoginButtonStyled";
import { Regular14Font } from "../../fonts/Fonts";

const LoginButton = () => {
  return (
    <LoginButtonStyled type="submit">
      <Regular14Font>Login</Regular14Font>
    </LoginButtonStyled>
  );
};

export default LoginButton;
