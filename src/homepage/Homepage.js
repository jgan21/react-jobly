import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../auth/userContext";
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
 * - isLoggedIn
 *
 * RoutesList -> Homepage
 */

function Homepage() {
  const { currUser, isLoggedIn } = useContext(userContext);


  return (
    <div className="Homepage">
      <div className="container text-center">
        <h1 className="mb-4 fw-bold">Jobly</h1>
        <p className="lead">All the jobs in one, convenient place.</p>
        {currUser && <h1>{`Welcome ${currUser.user.firstName}`}</h1>}
      </div>
      {!isLoggedIn &&
        <div>
          <Link
            className="btn btn-primary fw-bold me-3"
            to="/login">
            Login
          </Link>
          <Link
            className="btn btn-primary fw-bold"
            to="/signup">
            Sign up
          </Link>
        </div>
      }

    </div>
  );
}

export default Homepage;;