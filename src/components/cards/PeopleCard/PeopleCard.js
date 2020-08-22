import React from "react";
import PeopleCardStyled from "./PeopleCardStyled";
import User from "../../User";

const PeopleCard = ({ username, avatarUrl }) => {
  return (
    <PeopleCardStyled>
      <User username={username} avatarUrl={avatarUrl} textBlack />
    </PeopleCardStyled>
  );
};

export default PeopleCard;
