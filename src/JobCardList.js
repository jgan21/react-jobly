import React from "react";
import JobCard from "./JobCard";

/** JobCardList: create list of job cards
 *
 * State:
 * -None
 *
 * Props:
* - jobsData : an array of job data objects
 *  [{id, title, salary, equity, companyHandle, companyName}, ...]
 *
 * {JobList, CompanyDetails} -> JobCardList -> JobCard
*/

function JobCardList({ jobData }) {
  console.log("JobCardList jobData=", jobData);

  return (
    <div className="JobCardList">
      <ul>
        {jobData.map(job => (
          <li key={job.id}>
            <JobCard job={job} />
          </li>))}
      </ul>
    </div>
  );

}

export default JobCardList;
