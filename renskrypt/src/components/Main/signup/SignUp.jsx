import React from "react";
import { useState } from "react";

export default function SignUp() {
  const [errors, setErrors] = useState({
    pseudo: "",
    password: "",
  });
  const [values, setValues] = useState({
    pseudo: "",
    password: "",
    newsletter: false,
    country: false,
  });

  function handleTextInputChange(event) {
    setErrors({ ...errors, [event.target.id]: event.target.validationMessage });
    setValues({ ...values, [event.target.id]: event.target.value });
  }

  function handleCheckboxChange(event) {
    setValues({ ...values, [event.target.id]: event.target.checked });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submit !!!");
    fetch("api", {
      method: "POST",
      body: JSON.stringify(values),
    });
  }

  return (
    <div>
      <h2>Sign up form</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="pseudo">Pseudo</label>
          <input
            type="text"
            name=""
            id="pseudo"
            required
            minLength={3}
            onChange={handleTextInputChange}
          />
          {errors.pseudo !== "" && <p>{errors.pseudo}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name=""
            id="password"
            required
            onChange={handleTextInputChange}
          />
          {errors.password !== "" && <p>{errors.password}</p>}
        </div>
        <div>
          <label htmlFor="newsletter">Newsletter subscription</label>
          <input
            type="checkbox"
            name=""
            id="newsletter"
            onChange={handleCheckboxChange}
          />
        </div>
        <div>
          <label htmlFor="country">Select your country</label>
          <select name="" id="country" onChange={handleTextInputChange}>
            <option value="">France</option>
            <option value="">Suisse</option>
            <option value="">Belgique</option>
            <option value="">Québec</option>
          </select>
        </div>
        <input type="submit" value="" />
      </form>
    </div>
  );
}
