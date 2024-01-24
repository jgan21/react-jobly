import React from "react";

/**CompnayCard: display info about a single company
 *
 * State:
 * -None
 *
 * Props:
 * -companyData: an object of job data {handle, name, description, logoUrl}
 *
 * CompanyList -> companyCard
 */

function CompanyCard({ companyData }){
  const { name, description, logoUrl } = companyData;
  return (
    <div className="CompanyCard">
      <h3>{name}</h3>
      <p>{description}</p>
      <img src={logoUrl} alt={name}></img>
    </div>
  );
}

export default CompanyCard;