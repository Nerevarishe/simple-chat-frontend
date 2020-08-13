import React from "react";
import BaseButton from "../BaseButton";

const PeopleButton = ({ children }) => {
  return (
    <BaseButton>
      <span className="icon-people-icon" />
    </BaseButton>
  );
};

export default PeopleButton;
