import { NavLink } from "react-router-dom";

/** Nav: links to each endpoint.
 *
 * State: None
 *
 * Props: None
 *
 * App -> Nav: links to {"/", "/companies", "/jobs" }
 */

function Nav(){

return (
  <nav className="Nav">
    <NavLink to="/">Jobly</NavLink>
    <NavLink to="/companies">Companies</NavLink>
    <NavLink to="/jobs">Jobs</NavLink>
  </nav>
)
}


export default Nav;