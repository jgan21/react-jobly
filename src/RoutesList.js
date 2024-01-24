import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
// TODO:import components

/** List of routes for Jobly
 *
 * Props: None
 *
 * State: None
 *
 * App -> RoutesList
*/

function RoutesList(){

  return(
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/companies" element={<CompanyList/>}/>
        <Route path="/companies/:handle" element={<CompanyDetails/>}/>
        <Route path="/jobs" element={<JobList />}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </div>
  );
}

export default RoutesList;