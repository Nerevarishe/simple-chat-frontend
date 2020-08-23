import React from "react";
import PropTypes from "prop-types";
import PeoplesCounterStyled from "./PeoplesCounterStyled";
import { Regular10Font } from "../fonts/Fonts";

const PeoplesCounter = ({ peoplesCount }) => {
  return (
    <PeoplesCounterStyled>
      <span className="icon-people-icon" />
      <PeoplesCounterStyled>
        <Regular10Font>{peoplesCount}</Regular10Font>
      </PeoplesCounterStyled>
    </PeoplesCounterStyled>
  );
};

PeoplesCounter.propTypes = {
  peoplesCount: PropTypes.number.isRequired,
};

export default PeoplesCounter;
