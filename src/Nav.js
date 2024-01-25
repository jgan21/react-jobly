import { NavLink } from "react-router-dom";
import "./Nav.css"

/** Nav: links to each endpoint.
 *
 * State: None
 *
 * Props: None
 *
 * App -> Nav: links to {"/", "/companies", "/jobs" }
 */

function Nav() {

  return (
    <nav className="Nav">
      <NavLink to="/">Jobly</NavLink>
      <NavLink className="Nav-right" to="/companies">Companies</NavLink>
      <NavLink className="Nav-right" to="/jobs">Jobs</NavLink>
    </nav>
  );
}


export default Nav;