import React from "react";

/**JobCard: display info about a single job
 *
 * State:
 * -None
 *
 * Props:
 * -jobData: an object of job data {id, title, salary, equity, companyName}
 *
 * JobCardList -> JobCard
 */

function JobCard({ job }){
  console.log("JobCard job", job)
  const { title, salary, equity, companyName } = job;
  console.log("JobCard title=", title)
//jobCard in joblist includes company name
//jobCard in JobList does not

  return (
    <div className="JobCard">
      <h3>{title}</h3>
      {companyName !== undefined && <p>{companyName}</p>}
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
    </div>
  )
}

export default JobCard;