import React, { useState } from "react";
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

  // useEffect(function cancelDebounce(){
  //  return debouncedHandleSearch.cancel();
  // }, []);

  return (
    <div className="SearchForm mb-4">
      <form>
        <div className="row justify-content-center gx-0">
          <div className="col-8">
            <input
              className="form-control form-control-md"
              type="text"
              name="search"
              placeholder="Enter search term.."
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-md btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );

}

export default SearchForm;