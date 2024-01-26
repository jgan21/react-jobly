import React, { useContext }  from "react";
import { Link } from "react-router-dom";
import userContext from "./userContext";
import "./Homepage.css";

/** Renders Homepage with a simple welcome message.
 *
 * State:
 * - None
 *
 * Props:
 * - None
 *
 * Context:
 * - currUser
 *
 * RoutesList -> Homepage
 */

function Homepage() {
  const { currUser } = useContext(userContext);

  return (
    <div className="Homepage">
      <div>
        <h1>Jobly</h1>
        <h3>All the jobs in one, convenient place.</h3>
        {currUser && <h1>{`Welcome ${currUser.user.firstName}`}</h1>}
      </div>
      <div>
        <button><Link to="/login">Login</Link></button>
        <button><Link to="/signup">Sign up</Link></button>
      </div>
    </div>
  );
}

export default Homepage;;