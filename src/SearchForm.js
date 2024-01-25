import React, { useState, useMemo, useCallback } from "react";
import debounce from "lodash/debounce";

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

  // console.log("SeachForm state=", searchTerm);

  /** Handle updates from form input. */
  // function handleChange(evt) {
  //   const result = evt.target.value
  //   setSearchTerm(result);
    // console.log("evt.target.value=", evt.target.value)
  // }

  /** Send to parent component to handle when form is submitted  */
  function handleSubmit(evt) {
    // evt.preventDefault();
    handleSearch(searchTerm)
  }

  const debouncedHandleSearch = useMemo(() => {
    return debounce(handleSubmit, 500)});

  return (
    <div>
      <form className="SearchForm">
        <input
          className="SearchForm-input"
          type="text"
          name={e => e.target.value}
          placeholder="Enter search term.."
          value={e => e.target.value}
          onChange={e => debouncedHandleSearch(e.target.value)}>
        </input>
        <button className="SearchForm-btn">Submit</button>
      </form>
    </div>
  );

}

export default SearchForm;