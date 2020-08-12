import React from "react";
import AvatarStyled from "./AvatarStyled";
import PropTypes from "prop-types";

const Avatar = ({ imgUrl }) => {
  return <AvatarStyled src={imgUrl} />;
};

Avatar.protoTypes = {
  imgUrl: PropTypes.string,
};

export default Avatar;
