import React, { createContext, useReducer } from "react";
import reducer from "./reducer";
import avatar from "../assets/img/svg/avatar.svg";

const initialState = {
  auth: {
    isAuth: true,
    username: "John Doe",
    avatarUrl: avatar,
  },
  path: {},
  components: {
    header: {
      isHeaderSideBarPulled: false,
    },
  },
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
