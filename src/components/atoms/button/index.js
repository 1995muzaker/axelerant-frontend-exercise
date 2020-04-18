import React from "react";

const Button = ({ buttonValue, buttonType }) => {
  return <button type={buttonType}>{buttonValue}</button>;
};

export default Button;
