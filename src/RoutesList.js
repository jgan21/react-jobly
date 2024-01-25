import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetails from "./CompanyDetails";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";



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

function RoutesList({ login, signup, editProfile }){

  return(
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/companies" element={<CompanyList/>}/>
        <Route path="/companies/:handle" element={<CompanyDetails/>}/>
        <Route path="/jobs" element={<JobList />}/>
        <Route path="/login" element={<LoginForm login={login}/>}/>
        <Route path="/signup" element={<SignupForm signup={signup}/>}/>
        <Route path="/profile" element={<ProfileForm editProfile={editProfile}/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </div>
  );
}

export default RoutesList;