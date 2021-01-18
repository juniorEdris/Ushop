import React from 'react'
import "./searchInput.css";
import SearchSelect from './SearchSelect';

function SearchInput() {

    return (
        <div className="input-group mt-3 mb-3 col-7">
            <SearchSelect/>
            <input type="text" className="form-control search-input" placeholder="Search over 10,000 products" aria-label="Search over 10,000 products" aria-describedby="basic-addon2" />
            <div className="input-group-append">
                <button className="btn" type="button"><span class="lnr lnr-magnifier"/></button>
            </div>
        </div>
    )
}

export default SearchInput
