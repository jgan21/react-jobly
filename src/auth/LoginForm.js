import React, { useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";

/**Displays login form.
 *
 * State:
 * - formData: {username, password}
 * - formErrors = ["error message"]
 *
 * Props:
 * - login(): call to App to login user
 *
 * RoutesList -> LoginForm
 */

function LoginForm({ login }) {
  const initialState = { username: "", password: "" };
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState([]);

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
   * updates state of formData to intial state.
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await login(formData);
      setFormData(initialState);
      navigate("/");
    } catch (err) {
      setFormErrors(err);
    }
  }


  return (
    <div className="LoginForm">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h3 className="mb-3">Log In</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Login-username">Username:</label>
            <input
              id="Login-username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Login-password">Password:</label>
            <input
              id="Login-password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {formErrors.length > 0 && <div><b>{formErrors}</b></div>}
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default LoginForm;