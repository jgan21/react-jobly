import{ BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import RoutesList from "./RoutesList";

/**App for Jobly
 *
 * State: None
 *
 * Props: None
 *
 * App -> {Nav, RoutesList}
 */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RoutesList />
      </BrowserRouter>

    </div>
  );
}

export default App;
