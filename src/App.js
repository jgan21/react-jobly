import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import RoutesList from "./RoutesList";
import userContext from "./userContext";
import JoblyApi from "./api";
import { jwtDecode } from "jwt-decode";

/**App for Jobly
 *
 * State:
 * currUser = { username, firstName, lastName, email, isAdmin, jobs }
 *
 *
 * Props: None
 *
 * App -> {Nav, RoutesList}
 */

function App() {
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  console.log("App currUser state=", currUser)
  console.log("App token state=", token)

  useEffect(function getUserInfoOnTokenChange(){
    async function getUserInfo(){
      if (token){
        const { username } = jwtDecode(token);
        JoblyApi.token = token;
        console.log("getUserInfo username=", username)
        let user = await JoblyApi.getUser(username);
        setCurrUser({...user});
        console.log("getUserInfo currUser", currUser)
      }
    }
    getUserInfo();
  }, [token])

  /** login: handles login from LoginForm.
   * -Calls JoblyApi to retrieve user information
   * -updates state of currUser
  */
  async function login(userData) {
    try {
      let token = await JoblyApi.login(userData);
      let user = await JoblyApi.getUser(userData.username);
      setCurrUser({...user});
      setToken(token);
      localStorage.setItem('token', token);
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
      let token = await JoblyApi.signup(userData);
      let user = await JoblyApi.getUser(userData.username);
      setCurrUser({...user});
      setToken(token);
      localStorage.setItem('token', token);
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
    localStorage.removeItem('token');
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
