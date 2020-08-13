import React from "react";
import BaseButton from "../BaseButton/BaseButton";

const PeopleButton = ({ children }) => {
  return (
    <BaseButton iconClassName="icon-people-icon" buttonText="Users in chat" />
  );
};

export default PeopleButton;
