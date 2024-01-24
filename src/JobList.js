import React, { useState, useEffect } from "react";
import JobCardList from "./JobCardList";
import JoblyApi from "./api";
import SearchForm from "./SearchForm";

/** Job List: List all jobs.
 *
 *
 * State:
 * - jobsData : an array of job data objects
 * [{id, title, salary, equity, companyHandle, companyName}, ...]
 *
 *
 * Props:
 * - None
 *
 *
 * RoutesList -> JobList -> {SearchForm, JobCardList}
 */

function JobList(){
//send company name to JobCardList
const [jobData, setJobData] = useState({data: null, isLoading:true});
// const [searchTerm, setSearchTerm] = useState(undefined)
console.log("Joblist states:", jobData)

useEffect(function fetchAllJobData(){
  async function fetchJobs(){
    const resp = await JoblyApi.getAllJobs();
    console.log("resp from getAllJobs", resp)
    setJobData({data: resp, isLoading: false});
  }
  fetchJobs();
},[]);

async function handleSearch(term){
  const resp = await JoblyApi.getAllJobs(term);
  setJobData({data: resp, isLoading:false});
}

if(jobData.isLoading) return <p>Loading...</p>;

return (
  <div className="JobList">
    <SearchForm handleSearch={handleSearch} />
    <JobCardList jobData={jobData.data}/>
  </div>
)

}

export default JobList;