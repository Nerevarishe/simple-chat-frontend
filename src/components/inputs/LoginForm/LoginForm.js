import React from "react";
import LoginFormPosition from "./LoginFormPosition";
import BaseInput from "../BaseInput";
import LoginFormInputWrapper from "./LoginFormInputWrapper";

const LoginForm = () => {
  return (
    <LoginFormPosition>
      <form action="" >
        <LoginFormInputWrapper>
          <BaseInput type="text" placeholder={"Login"} />
        </LoginFormInputWrapper>
        <LoginFormInputWrapper>
          <BaseInput type="password" placeholder={"Password"} />
        </LoginFormInputWrapper>
      </form>
    </LoginFormPosition>
  );
};

export default LoginForm;
