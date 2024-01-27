import React, { useState, useContext } from "react";
import userContext from "./userContext";
import { useNavigate } from "react-router-dom";


/** Edit Profile Form.
 *
 * State:
 * - formData: {username, password, firstName, lastName, email}
 * - formErrors = ["error message"]
 *
 *
 * Props:
 * - editProfile() : function to call in Parent
 *
 * Context:
 * - currUser
 *
 * RoutesList -> ProfileForm
 */

function ProfileForm({ editProfile }) {
  const { currUser } = useContext(userContext);
  const user = currUser.user;

  const [formData, setFormData] = useState(user);
  const [formErrors, setFormErrors] = useState([]);
  const navigate = useNavigate();


  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(curr => ({
      ...curr,
      [name]: value
    }
    ));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await editProfile(formData);
      setFormData(user);
      navigate("/")
    } catch (err){
      setFormErrors(err);
    }
  }

  return (
    <form className="ProfileForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="ProfileForm-username">Username:</label>
        <input
          id="ProfileForm-username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          disabled>
        </input>
      </div>
      <div>
        <label htmlFor="ProfileForm-firstName">First Name:</label>
        <input
          id="ProfileForm-firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}>
        </input>
      </div>
      <div>
        <label htmlFor="ProfileForm-lastName">Last Name:</label>
        <input
          id="ProfileForm-lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}>
        </input>
      </div>
      <div>
        <label htmlFor="ProfileForm-email">Email:</label>
        <input
          id="ProfileForm-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}>
        </input>
      </div>
      {formErrors.length > 0 && <div><b>{formErrors}</b></div>}
      <button>Submit</button>
    </form>
  );

}

export default ProfileForm;