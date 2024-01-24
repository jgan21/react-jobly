import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";
import JoblyApi from "./api";

/** CompanyList - list all companies
 *
 * State:
 * - companiesData
 * [{handle, name, description, numEmployees, logo_Url}, ...]
 *
 * Props:
 *
 * RouteList -> CompanyList -> {CompanyCard, SearchForm}
 */

function CompanyList() {
  const [companiesData, setCompaniesData] = useState(
    { data: null, isLoading: true }
  );
  const [searchTerm, setSearchTerm] = useState("");

  /** useEffect:
   * - fetch data for all companies after initial render.
   * - get all companies matching search term if search term
  */

  useEffect(function fetchAllCompaniesData() {
    async function fetchAllCompanies() { //FIXME: fetch vs get.
      const resp = await JoblyApi.getAllCompanies(searchTerm);
      setCompaniesData({ data: resp, isLoading: false });
    }
    fetchAllCompanies();
  }, [searchTerm]);

  function handleSearch(term) {
    setSearchTerm(term);
    setCompaniesData({ data: null, isLoading: true });
  }

  if (companiesData.isLoading === true) return <p>Loading...</p>;

  return (
    <div className="CompanyList">
      <SearchForm handleSearch={handleSearch} />
      <ul>
        {companiesData.data.map(c =>
          <li key={c.handle}>
            <CompanyCard companyData={c} />
          </li>
        )
        }
      </ul>
    </div>
  );
}

export default CompanyList;