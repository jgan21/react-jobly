import { useState } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
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

  // TODO:don't need now, may need when dealing with local storage
  // useEffect(function fetchUserInfoOnTokenChange(){
  //   async function fetchUserInfo(){
  //     try{
  //       //pass in username to backend call ('users/username)
  //       let user = await JoblyApi.getUser(currUser.username);
  //     }catch{
  //     }
  //   }
  // })

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

  // logout()
  //set user context to null
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
