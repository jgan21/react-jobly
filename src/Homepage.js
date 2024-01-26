import React from "react";
import { useContext } from "react";
import userContext from "./userContext";
import "./Homepage.css";

/** Renders Homepage with a simple welcome message.
 *
 *
 * State : None
 *
 *
 * Props None
 *
 *
 * RoutesList -> Homepage
 */

//TODO: add buttons -> call to action

function Homepage() {
  const { currUser } = useContext(userContext);

  return (
    <div className="Homepage">
      <div>
        <h1>Jobly</h1>
        <h3>All the jobs in one, convenient place.</h3>
        {currUser && <h1>{`Welcome ${currUser.user.firstName}`}</h1>}
      </div>
    </div>
  );
}

export default Homepage;;