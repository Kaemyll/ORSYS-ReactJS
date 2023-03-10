import React, { useRef } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";

export default function SignUp() {
  const [values, setValues] = useState({
    pseudo: "??",
    password: "password",
    newsletter: false,
    country: [1],
  });

  const fileRef = useRef();

  const [errors, setErrors] = useState({
    pseudo: "",
    password: "",
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
    console.log(fileRef);
    fetch("api", {
      method: "POST",
      body: JSON.stringify(values),
    });
  }

  return (
    <div>
      <h2>Sign up form</h2>
      <hr />
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="pseudo">Pseudo</label>
          <input
            type="text"
            name="pseudo"
            id="pseudo"
            required
            minLength={3}
            onChange={handleTextInputChange}
            value={values.pseudo}
          />
          {errors.pseudo !== "" && <p>{errors.pseudo}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            minLength={8}
            onChange={handleTextInputChange}
            value={values.password}
          />
          {errors.password !== "" && <p>{errors.password}</p>}
        </div>
        <div>
          <label htmlFor="newsletter">Newsletter subscription</label>
          <input
            type="checkbox"
            name="checkbox"
            id="newsletter"
            onChange={handleCheckboxChange}
            value={values.newsletter}
          />
        </div>
        <div>
          <label htmlFor="country">Select your country</label>
          <select
            name="country"
            id="country"
            onChange={handleTextInputChange}
            value={values.country}
          >
            <option value="">France</option>
            <option value="">Suisse</option>
            <option value="">Belgique</option>
            <option value="">Qu??bec</option>
          </select>
        </div>
        <div>
          <input type="file" name="" id="avatar" ref={fileRef} />
        </div>
        <input type="submit" value="Envoyer" />
      </Form>
    </div>
  );
}
