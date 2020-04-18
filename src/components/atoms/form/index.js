import React from "react";

const Form = ({ type, placeholder }) => {
  return <input type={type} placeholder={placeholder} required />;
};

export default Form;
