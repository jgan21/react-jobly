import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import userContext from "../auth/userContext";

/** Nav: links to each endpoint.
 *
 * State:
 * - None
 *
 * Props:
 * - logout() : function to call in parent(App)
 *
 * Context:
 * - currUser
 *
 * App -> Nav
 */

function Nav({ logout }) {

  //TODO: flattening out the currUser.user
  const { currUser } = useContext(userContext);
  console.log("Nav currUser=", currUser)

  if (currUser) {
    return (
      <nav className="Nav">
        <NavLink className="Nav-title" to="/">Jobly</NavLink>
        <ul>
          <li><NavLink to="/companies">Companies</NavLink></li>
          <li><NavLink to="/jobs">Jobs</NavLink></li>
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="/" onClick={logout}>
            {`Logout ${currUser.user.firstName}`}
          </NavLink></li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="Nav">
        <NavLink className="Nav-title" to="/">Jobly</NavLink>
        <ul>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;