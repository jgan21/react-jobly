import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import RoutesList from "./RoutesList";
import userContext from "./userContext";
import JoblyApi from "./api";
import { jwtDecode } from "jwt-decode";

/** App for Jobly
 *
 * State:
 * - currUser = { username, firstName, lastName, email, isAdmin, jobs }
 * - token = jwt token from API
 *
 * Props: None
 *
 * App -> {Nav, RoutesList}
 */

function App() {
  const [currUser, setCurrUser] = useState(null);
  //TODO: add comment to indicate that localStorage is initially null
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  console.log("App currUser state=", currUser);
  console.log("App token state=", token);

  /** If there is a token, get user info and set state of currUser */

  useEffect(function getUserInfoOnTokenChange() {
    async function getUserInfo() {
      if (token) {
        const { username } = jwtDecode(token);
        JoblyApi.token = token;

        let user = await JoblyApi.getUser(username);
        setCurrUser({ ...user });
      }
    }
    getUserInfo();
  }, [token]);

  /** Login: handles login from LoginForm.
   * - Calls JoblyApi to retrieve user information
   * - updates state of currUser
  */

  async function login(userData) {
    let token = await JoblyApi.login(userData);
    setToken(token);
    localStorage.setItem('token', token);

  }

  /** Signup: handles signup from SignUp form.
   * - Calls Joblyapi to retrieve user information
   * - updates state of currUser
   * - updates state of token and sets token in local storage
   */

  async function signup(userData) {
    let token = await JoblyApi.signup(userData);
    setToken(token);
    localStorage.setItem('token', token);

  }
  //TODO:add docstring
  async function editProfile(userData){
    let user = await JoblyApi.editProfile(userData);
    setCurrUser({...user});
  }

  /** Logout: handles logout click from nav
   * - updates currUser to null
   * - updates token to null and removes token from local storage
   */

  function logout() {
    setCurrUser(null);

    setToken(null);
    localStorage.removeItem('token');
    JoblyApi.logout();
  }


  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={{ currUser, isLoggedIn: currUser !== null }}>
          <Nav logout={logout} />
          <RoutesList login={login} signup={signup} editProfile={editProfile}/>
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
