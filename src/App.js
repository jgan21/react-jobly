import{ BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import RoutesList from "./RoutesList";
import userContext from "./userContext";

/**App for Jobly
 *
 * State: None
 *
 * Props: None
 *
 * App -> {Nav, RoutesList}
 */

function App() {
  //state for: keeping track of user info
  //state for  token: use an effect to watch for changes to the token to kick off
    //a process of loading the information about the new user.

  //useEffect: dependency of token
    //if token changes,




  //async login()
    //-call JoblyApi function to get token
    //catch errors-alert box
    //store token in state
    //update user context by decoding jwt


  //async signup()
    //-call JoblyApi function to get token
    //catch errors-alert box
    //store token in state
    //update user context by decoding jwt

  // logout()
    //set user context to null
    //set token to null


  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider>
          <Nav />
          <RoutesList />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
