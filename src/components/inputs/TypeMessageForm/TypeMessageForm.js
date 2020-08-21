import React from "react";
import PropTypes from "prop-types";
import TypeMessageInput from "./TypeMesageInput";
import TypeMessageFormPosition from "./TypeMessageFormPosition";
import SendMessageButton from "../../buttons/SendMessageButton";
import TypeMessageFormSendButtonPosition from "./TypeMessageFormSendButtonPosition";

const TypeMessageForm = ({ formSubmitHandler }) => {
  return (
    <TypeMessageFormPosition>
      <form onSubmit={formSubmitHandler}>
        <TypeMessageInput />
        <TypeMessageFormSendButtonPosition>
          <SendMessageButton />
        </TypeMessageFormSendButtonPosition>
      </form>
    </TypeMessageFormPosition>
  );
};

TypeMessageForm.propTypes = {
  formSubmitHandler: PropTypes.func.isRequired,
};

export default TypeMessageForm;
