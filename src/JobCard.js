import React from "react";

/**JobCard: display info about a single job
 *
 * State:
 * -None
 *
 * Props:
 * -job: an object of job data {id, title, salary, equity, companyName}
 *
 * JobCardList -> JobCard
 */

function JobCard({ job }) {
  const { title, salary, equity, companyName } = job;

  return (
    <div className="JobCard">
      <h3>{title}</h3>
      {companyName !== undefined && <p>{companyName}</p>}
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
    </div>
  );
}

export default JobCard;