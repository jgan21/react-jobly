import{ BrowserRouter } from "react-router-dom";
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


  //useEffect: dependency of token
    //if token changes,
    //call JOblyAPi -> calls backend /token to get user info

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


  //async login()
    //-call JoblyApi function to get token
    //catch errors-alert box
    //store token in state
    //update user context by decoding jwt

    async function signup(userData){
      try{
        await JoblyApi.signup(userData);

        let user = await JoblyApi.getUser(userData.username)
        setCurrUser(user);
      }catch(err){
        //errors to alert-box
        console.log("error from signup", err);
      }
    }

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
