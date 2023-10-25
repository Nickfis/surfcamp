"use client";
import { useState } from "react";
import TextInput from "../TextInput";

const SignupForm = ({ headline, infoText, buttonLabel }) => {
  const [formData, setFormData] = useState({});

  const onChange = (e) => {
    console.log("hi");
  };

  return (
    <section className="signup-form">
      <div className="signup-form__info">
        <h3 className="signup-form__headline">{headline}</h3>
        {infoText}
      </div>
      <form className="signup-form__form">
        <div className="signup-form__name-container">
          <TextInput
            inputName="firstName"
            value={formData.firstName}
            onChange={onChange}
            label="First Name"
          />
          <TextInput
            inputName="lastName"
            value={formData.lastName}
            onChange={onChange}
            label="Last Name"
          />
        </div>
        <TextInput
          inputName="email"
          value={formData.email}
          onChange={onChange}
          label="Your email address"
        />
        <TextInput
          inputName="phone"
          value={formData.phone}
          onChange={onChange}
          label="Your telephone number"
        />
        <button className="btn btn--medium btn--teal">
          {buttonLabel || "Stay in touch!"}
        </button>
      </form>
    </section>
  );
};

export default SignupForm;
