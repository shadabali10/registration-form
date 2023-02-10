import React, { useState } from "react";
import "./SignInSignUpForm.css";

const SignInSignUpForm = () => {
  const [formType, setFormType] = useState("signin");

  const handleFormType = type => {
    setFormType(type);
  };

  return (
    <div className="form-container">
      <div className={`form-header ${formType === "signin" ? "signin" : "signup"}`}>
        <div
          className={`form-header-item ${formType === "signin" ? "active" : ""}`}
          onClick={() => handleFormType("signin")}
        >
          Sign In
        </div>
        <div
          className={`form-header-item ${formType === "signup" ? "active" : ""}`}
          onClick={() => handleFormType("signup")}
        >
          Sign Up
        </div>
      </div>
      <form className="form">
        {formType === "signin" ? (
          <>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign In</button>
          </>
        ) : (
          <>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button type="submit">Sign Up</button>
          </>
        )}
      </form>
    </div>
  );
};

export default SignInSignUpForm;
