import React, { useState } from "react";

/**Displays login form.
 *
 * State:
 * - formData: {username, password}
 *
 * Props:
 * - login(): call to App to login user
 *
 * RoutesList -> LoginForm
 */

function LoginForm({ login }) {
  const initialState = { username: "", password: "" };

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
    login(formData);
    setFormData(initialState);
  }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <label htmlFor="Login-username">Username:</label>
      <input
        id="Login-username"
        name="username"
        value={formData.username}
        onChange={handleChange}>
      </input>
      <label htmlFor="Login-password">Password:</label>
      <input
        id="Login-password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}>
      </input>
      <button>Submit</button>
    </form>
  );
}
export default LoginForm;