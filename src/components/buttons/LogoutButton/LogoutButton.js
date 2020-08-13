import React from "react";
import BaseButton from "../BaseButton";

const LogoutButton = ({ children }) => {
  return (
    <BaseButton>
      <span className="icon-logout-icon" />
    </BaseButton>
  );
};

export default LogoutButton;
