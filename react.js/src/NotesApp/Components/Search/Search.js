import React from 'react';
import {MdSearch} from 'react-icons/md'
function Search({value,handleOnChange}) {
  return <div className='search'>
    <MdSearch className='search-icon' size="1.3em"/>
    <input placeholder='Search Here' value={value} onChange={(e) => handleOnChange(e.target.value)} />
  </div>;
}

export default Search;

