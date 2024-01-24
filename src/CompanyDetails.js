import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobCardList from "./JobCardList";

/** Company Details: display details of this company.
 *
 * Params:
 * /:handle
 *
 * State:
 * - companyInfo
 * {handle, name, description, numEmployees, logo_Url}
 *
 * Props:
 * - None
 *
 * RoutesList -> CompanyDetails -> JobCardList
 */

function CompanyDetails(){
  //TODO: NotfoundError?? handle it. use <Navigate>

  const [companyInfo, setCompanyInfo] = useState({data: null, isLoading: true});
  console.log("CompanyDetail state=", companyInfo)

  const { handle } = useParams();
  console.log("CompanyDetail handle", handle)

  /** useEffect: fetches company data that matches the handle given. */

  useEffect(function fetchCompanyData(){
    async function fetchCompany(){
      const resp = await JoblyApi.getCompany(handle);
      setCompanyInfo({data: resp, isLoading: false});
    }
    fetchCompany();
  }, [ ]);

  if (companyInfo.isLoading === true) return <p>Loading...</p>;

  return (
    <div className="CompanyDetails">
      <h3>{companyInfo.data.name}</h3>
      <p>{companyInfo.data.description}</p>
      <JobCardList jobData={companyInfo.data.jobs} />
    </div>
  )
}

export default CompanyDetails;