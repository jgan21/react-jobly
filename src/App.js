import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import RoutesList from "./RoutesList";
import userContext from "./userContext";
import JoblyApi from "./api";

/**App for Jobly
 *
 * State: None
 *
 * Props: None
 *
 * App -> {Nav, RoutesList}
 */

function App() {
  const [currUser, setCurrUser] = useState(null);


  /** login: handles login from LoginForm.
   * -Calls JoblyApi to retrieve user information
   * -updates state of currUser
  */
  async function login(userData) {
    try {
      await JoblyApi.login(userData);
      let user = await JoblyApi.getUser(userData.username);
      setCurrUser({...user});
    } catch (err) {
      //errors to alert box
      console.log("error from login", err);
    }
  }

  /** signup: handles signup from SignUp form.
   * -Calls Joblyapi to retrieve user information
   * -updates state of currUser
    */
  async function signup(userData) {
    try {
      await JoblyApi.signup(userData);
      let user = await JoblyApi.getUser(userData.username);
      setCurrUser({...user});
    } catch (err) {
      //errors to alert-box
      console.log("error from signup", err);
    }
  }
  console.log("Curr user after signup:", currUser)

  /** logout: handles logout click from nav
   * -updates currUser to null
   */
  function logout(){
    setCurrUser(null);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value ={{currUser}}>
          <Nav logout={logout}/>
          <RoutesList login={login} signup={signup}/>
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
