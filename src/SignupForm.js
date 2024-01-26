import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


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


//TODO: catch error after code review.

function SignupForm({ signup }) {
  const initialState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  /** hanldes input changes and updates state of formData */

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(curr => ({
      ...curr,
      [name]: value
    }
    ));
  }

  /** handles submit. Calls signup function in App and
   * updates state of formData to intial state
   */

  function handleSubmit(evt) {
    evt.preventDefault();
    signup(formData);
    setFormData(initialState);
    navigate("/");
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
        type="password"
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
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}>
      </input>
      <button>Submit</button>
    </form>
  );
}

export default SignupForm;