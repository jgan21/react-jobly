import React, { useState, useEffect } from "react";
import JobCardList from "./JobCardList";
import JoblyApi from "./api";
import SearchForm from "./SearchForm";

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
  //TODO: we are not getting a response-change name
  useEffect(function fetchJobsOnSearchTermChange() {
    async function fetchJobs() {
      const resp = await JoblyApi.getAllJobs(searchTerm);
      setJobData({
        data: resp,
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

  if (jobData.isLoading) return <p>Loading...</p>;

  return (
    <div className="JobList">
      <SearchForm handleSearch={handleSearch} />
      <JobCardList jobData={jobData.data} />
    </div>
  );
}

export default JobList;