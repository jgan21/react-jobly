import React, { useState, useEffect } from "react";
import JobCardList from "./JobCardList";
import JoblyApi from "../api/api";
import SearchForm from "../search/SearchForm";

/** Job List: List all jobs.
 *
 * State:
 * - jobsData : an array of job data objects
 * [{id, title, salary, equity, companyHandle, companyName}, ...]
 *
 * Props:
 * - None
 *
 * RoutesList -> JobList -> {SearchForm, JobCardList}
 */

function JobList() {
  const [jobData, setJobData] = useState({
    data: null,
    isLoading: true
  });
  const [searchTerm, setSearchTerm] = useState("");

  console.log("Joblist states:", jobData);

  /**useEffect: fetches all jobs after initial render.
   * -fetches all jobs matching search term if search term changes
   */

  useEffect(function fetchJobsOnSearchTermChange() {
    async function fetchJobs() {
      const jobs = await JoblyApi.getAllJobs(searchTerm);
      setJobData({
        data: jobs,
        isLoading: false
      });
    }
    fetchJobs();
  }, [searchTerm]);

  /** Updates search term from searchForm
   * Resets jobdata to initial state
   */

  function handleSearch(term) {
    setSearchTerm(term);
    setJobData({
      data: null,
      isLoading: true
    });
  }


  return (
    <div className="JobList col-md-8 offset-md-2">
      <SearchForm handleSearch={handleSearch} />
      {jobData.isLoading
        ? <p>Loading...</p>
        : <JobCardList jobData={jobData.data} />}
    </div>
  );
}

export default JobList;