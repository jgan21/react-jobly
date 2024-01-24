import React, { useState } from "react";

/**SearchForm: form for handling search input.
 *
 * State:
 * -searchTerm: string
 *
 * Props:
 * -handleSearch: function that calls parent on submit
 *
 * JobList -> SearchForm
 */

function SearchForm({ handleSearch }) {
  console.log("SearchForm prop=", handleSearch);

  const [searchTerm, setSearchTerm] = useState("");

  console.log("SeachForm state=", searchTerm);

  /** Handle updates from form input. */
  function handleChange(evt) {
    const result = evt.target.value;
    setSearchTerm(result);
  }

  //TODO: how to have the parent handle????
  /** Send to parent component to handle when form is submitted  */
  function handleSubmit(evt) {
    evt.preventDefault()
    handleSearch(searchTerm);
  }

  return (
    <div>
      <form className="SearchForm" onSubmit={handleSubmit}>
        <input
          className="SearchForm-input"
          name={searchTerm}
          placeholder="Enter search term.."
          value={searchTerm}
          onChange={handleChange}>
        </input>
        <button className="SearchForm-btn">Submit</button>
      </form>
    </div>
  );

}

export default SearchForm;