import React from "react";
import LoginFormPosition from "./LoginFormPosition";
import BaseInput from "../BaseInput";
import LoginFormInputWrapper from "./LoginFormInputWrapper";
import LoginFormWrapper from "./LoginFormWrapper";
import LoginButton from "../../buttons/LoginButton";
import PropTypes from "prop-types";

const LoginForm = ({ loginHandler }) => {
  return (
    <LoginFormPosition>
      <form onSubmit={loginHandler}>
        <LoginFormInputWrapper>
          <BaseInput type="text" placeholder={"Login"} />
        </LoginFormInputWrapper>
        <LoginFormInputWrapper>
          <BaseInput type="password" placeholder={"Password"} />
        </LoginFormInputWrapper>
        <LoginFormWrapper>
          <LoginButton />
        </LoginFormWrapper>
      </form>
    </LoginFormPosition>
  );
};

LoginForm.propTypes = {
  loginHandler: PropTypes.func,
};

export default LoginForm;
