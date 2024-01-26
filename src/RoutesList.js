import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetails from "./CompanyDetails";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";
import userContext from "./userContext";



/** List of routes for Jobly
 *
 * Props:
 * -login(): function to call in parent to login user
 * -signup(): function to call in parent to signup a new user
 * -editProfile(): function to call in parent to update user profile
 *
 * State: None
 *
 * App -> RoutesList
*/

function RoutesList({ login, signup, editProfile }) {
  const { currUser, isLoggedIn } = useContext(userContext);
  console.log("RoutesList, currUser", currUser);

  if (isLoggedIn) {
    return (
      <div>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:handle" element={<CompanyDetails />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/profile" element={<ProfileForm editProfile={editProfile} />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <div>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginForm login={login} />} />
          <Route path="/signup" element={<SignupForm signup={signup} />} />
        </Routes>
      </div>
    );
  }
}

export default RoutesList;