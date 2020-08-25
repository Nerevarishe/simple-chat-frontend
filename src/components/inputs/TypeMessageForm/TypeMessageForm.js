import React from "react";
import PropTypes from "prop-types";
import TypeMessageInput from "./TypeMesageInput";
import TypeMessageFormPosition from "./TypeMessageFormPosition";
import SendMessageButton from "../../buttons/SendMessageButton";
import TypeMessageFormSendButtonPosition from "./TypeMessageFormSendButtonPosition";

const TypeMessageForm = ({ formSubmitHandler, onChangeHandler, data }) => {
  return (
    <TypeMessageFormPosition>
      <form onSubmit={formSubmitHandler}>
        <TypeMessageInput onChangeHandler={onChangeHandler} data={data} />
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
