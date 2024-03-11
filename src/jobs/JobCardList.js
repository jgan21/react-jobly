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
      {jobData.map(job => (
        <JobCard
          key={job.id}
          job={job}
        />
      ))}
    </div >
  );
}

export default JobCardList;
