import React, { Fragment } from "react";
import avatar from "../../assets/img/svg/avatar.svg";
import PeopleCard from "../../components/cards/PeopleCard";
import PeoplesPageCardPosition from "./PeoplesPageCardPosition";

const peopleInChat = [
  {
    user: {
      id: 1,
      username: "John Doe",
      avatarUrl: avatar,
    },
  },
  {
    user: {
      id: 2,
      username: "Jane Doe",
      avatarUrl: avatar,
    },
  },
  {
    user: {
      id: 3,
      username: "Jim Doe",
      avatarUrl: avatar,
    },
  },
];

const PeoplesPage = () => {
  return (
    <Fragment>
      {peopleInChat.map((el) => (
        <PeoplesPageCardPosition>
          <PeopleCard
            key={el.user.id}
            username={el.user.username}
            avatarUrl={el.user.avatarUrl}
          />
        </PeoplesPageCardPosition>
      ))}
    </Fragment>
  );
};

export default PeoplesPage;
