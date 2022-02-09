import React, { useContext } from 'react';
import {MdSearch} from 'react-icons/md'
import Context from '../../Context/Context';
function Search() {
  const appState = useContext(Context)
  const [search,setSearch] = appState.search
  return <div className='search'>
    <MdSearch className='search-icon' size="1.3em"/>
    <input placeholder='Search Here' value={search} onChange={(e) => setSearch(e.target.value)} />
  </div>;
}

export default Search;

