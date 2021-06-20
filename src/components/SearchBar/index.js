import React from 'react';
import './style.css';

const SearchBar = (props) => {
  return (
    <div className="search-bar">
        <form> 
            <input 
            value={props.value} 
            name="search" 
            type="text"
            placeholder="Search Employee Name..."
            onChange={props.handleInputChange}
            />
        </form>
    </div>
  );
};

export default SearchBar;