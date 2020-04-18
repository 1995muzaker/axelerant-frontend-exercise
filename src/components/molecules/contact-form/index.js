import React from "react";
import Form from "../../atoms/form";
import "./contactform.scss";
import Button from "../../atoms/button";

const ContactForm = () => {
  return (
    <form className="form-sec">
      <Form type={"text"} placeholder={"Fullname"} />
      <Form type={"email"} placeholder={"Email Address"} />
      <Form type={"number"} placeholder={"Phone Number"} />
      <div>
        <textarea rows="8" placeholder="Message in brief" />
      </div>
      <div>
        <Button buttonType={"submit"} buttonValue={"Submit"} />
      </div>
    </form>
  );
};

export default ContactForm;
