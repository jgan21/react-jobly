import React from "react";
import { Link } from "react-router-dom";

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

function CompanyCard({ companyData }) {
  const { name, description, logoUrl, handle } = companyData;
  return (
    <Link className="CompanyCard-link" to={`/companies/${handle}`}>
      <div className="CompanyCard-container">
        <h3>{name}</h3>
        <p>{description}</p>
        {logoUrl &&
          <img src={logoUrl} alt={name}></img>
        }
      </div>
    </Link>
  );
}

export default CompanyCard;