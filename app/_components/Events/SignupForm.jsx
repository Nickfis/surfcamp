"use client";
import { useState } from "react";
import TextInput from "../TextInput";
import axios from "axios";
import { allDataFilledIn } from "@/utils/validation.utils";
import { generateSignupPayload } from "@/utils/strapi.utils";

const SignupForm = ({
  headline,
  infoText,
  buttonLabel,
  pricing,
  eventId = null,
}) => {
  const [formData, setFormData] = useState({
    firstName: "Niklas",
    lastName: "Fischer",
    email: "nik@gmail.com",
    phone: "321321",
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = generateSignupPayload(formData, eventId);

    if (allDataFilledIn(formData)) {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/participants`,
          payload
        );
        console.log(response);
        setShowConfirmation(true);
      } catch (err) {
        setErrorMessage(
          err.response?.data?.error?.message || "Something went wrong"
        );
      }
    } else {
      setErrorMessage("Please fill out all fields.");
    }
  };

  return (
    <section className="signup-form">
      <div className="signup-form__info">
        <h3 className="signup-form__headline">{headline}</h3>
        {infoText}
      </div>
      {showConfirmation ? (
        <div className="signup-form__form">
          <h4>Thank you for signing up. We will get in touch soon!</h4>
        </div>
      ) : (
        <form className="signup-form__form" onSubmit={onSubmit}>
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
          {errorMessage && (
            <p className="copy signup-form__error">{errorMessage}</p>
          )}
          <button className="btn btn--medium btn--turquoise" type="submit">
            {buttonLabel || "Stay in touch!"}
          </button>
          {pricing && (
            <div className="signup-form__pricing">
              <h3>Pricing</h3>
              <p className="copy">
                Single Room:{" "}
                <span className="bold">{pricing.singlePrice}€ per person</span>
              </p>
              <p className="copy">
                Shared Room:{" "}
                <span className="bold">{pricing.sharedPrice}€ per person</span>
              </p>
            </div>
          )}
        </form>
      )}
    </section>
  );
};

export default SignupForm;
