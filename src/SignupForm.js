import React, { useState } from "react";

/** Display signup form.
 *
 * State:
 * - formData: {username, password, firstName, lastName, email}
 *
 * Props:
 *  - signup() : call App to sign up user
 *
 * RoutesList -> SignupForm
 */

function SignupForm({ signup }) {
  const initialState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };
  const [formData, setFormData] = useState(initialState);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(curr => ({
      ...curr,
      [name]: value
    }
    ));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    signup(formData);
    setFormData(initialState);
  }

  return (
    <form className="SignupForm" onSubmit={handleSubmit}>
      <label htmlFor="Signup-username">Username:</label>
      <input
        id="Signup-username"
        name="username"
        value={formData.username}
        onChange={handleChange}>
      </input>
      <label htmlFor="Signup-password">Password:</label>
      <input
        id="Signup-password"
        name="password"
        value={formData.password}
        onChange={handleChange}>
      </input>
      <label htmlFor="Signup-firstName">First Name:</label>
      <input
        id="Signup-firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}>
      </input>
      <label htmlFor="Signup-lastName">Last Name:</label>
      <input
        id="Signup-lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}>
      </input>
      <label htmlFor="Signup-email">Email:</label>
      <input
        id="Signup-email"
        name="email"
        value={formData.email}
        onChange={handleChange}>
      </input>
    </form>
  );
}

export default SignupForm;