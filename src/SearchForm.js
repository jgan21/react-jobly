import React, { useState, useEffect, useMemo, useCallback } from "react";
import debounce from "lodash/debounce";
import "./SearchForm.css";

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
  // console.log("SearchForm prop=", handleSearch);

  const [searchTerm, setSearchTerm] = useState("");

  console.log("SeachForm state=", searchTerm);

  /** Handle updates from form input. */
  function handleChange(evt) {
    const result = evt.target.value;
    setSearchTerm(result);

    debouncedHandleSearch(result);
  }

  /** Send to parent component to handle when form is submitted  */

  const debouncedHandleSearch = debounce(handleSearch, 500);

  // console.log("debouncedHandleSearch", debouncedHandleSearch);

  // useEffect(function cancelDebounce(){
  //  return debouncedHandleSearch.cancel();
  // }, []);

  return (
    <div>
      <form className="SearchForm">
        <input
          className="SearchForm-input"
          type="text"
          name="search"
          placeholder="Enter search term.."
          value={searchTerm}
          onChange={handleChange}>
        </input>
        {/* <button className="SearchForm-btn">Submit</button> */}
      </form>
    </div>
  );

}

export default SearchForm;