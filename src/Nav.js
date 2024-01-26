import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import userContext from "./userContext";

/** Nav: links to each endpoint.
 *
 * State: None
 *
 * Props:
 * - logout() : function to call in parent(App)
 *
 * App -> Nav
 */

function Nav({ logout }) {
  const { currUser } = useContext(userContext);
  console.log("Nav currUser=", currUser)

  if (currUser) {
    return (
      <nav className="Nav">
        <NavLink className="Nav-left" to="/">Jobly</NavLink>
        <NavLink className="Nav-right" to="/companies">Companies</NavLink>
        <NavLink className="Nav-right" to="/jobs">Jobs</NavLink>
        <NavLink className="Nav-right" to="/profile">Profile</NavLink>
        <NavLink className="Nav-right" to="/" onClick={logout}>
          {`Logout ${currUser.user.firstName}`}
        </NavLink>
      </nav>
    );
  } else {
    return (
      <nav className="Nav">
        <NavLink className="Nav-left" to="/">Jobly</NavLink>
        <NavLink className="Nav-right" to="/login">Login</NavLink>
        <NavLink className="Nav-right" to="/signup">Sign Up</NavLink>
      </nav>
    );
  }
}

export default Nav;