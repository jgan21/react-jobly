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
  // const { currUser } = useContext(userContext);

  // if (currUser) {
  //   return (
  //     <nav className="Nav">
  //       <NavLink className="Nav-right" to="/companies">Companies</NavLink>
  //       <NavLink className="Nav-right" to="/jobs">Jobs</NavLink>
  //       <NavLink className="Nav-right" to="/profile">Profile</NavLink>
  //     //TODO:
  //       <NavLink className="Nav-right" to="/logout" logout={logout}>
  //         Logout {`${currUser.firstName}`}
  //       </NavLink>
  //     </nav>
  //   );
  // } else {
    return (
      <nav className="Nav">
        <NavLink to="/">Jobly</NavLink>
        <NavLink className="Nav-right" to="/login">Login</NavLink>
        <NavLink className="Nav-right" to="/signup">Sign Up</NavLink>
      </nav>
    );
  }
// }

export default Nav;