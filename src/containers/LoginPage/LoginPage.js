import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import LoginForm from "../../components/inputs/LoginForm";
import LoginFormWrapper from "../../components/inputs/LoginForm/LoginFormWrapper";
import { Context } from "../../globalStore/store";
import { LOGIN } from "../../globalStore/actions";

const LoginPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(Context);
  let history = useHistory();

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch({ type: LOGIN });
    history.push("/chat_page")
  };

  return (
    <LoginFormWrapper>
      <LoginForm loginHandler={loginHandler} />
    </LoginFormWrapper>
  );
};

export default LoginPage;
