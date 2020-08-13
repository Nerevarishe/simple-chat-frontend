import React from "react";
import BaseButton from "../BaseButton";

const PeopleButton = () => {
  return (
    <BaseButton
      iconClassName="icon-people-icon"
      buttonText="Users in chat"
      navigateToPath="/peoples_page"
    />
  );
};

export default PeopleButton;
