import React from 'react';
/**
 * The search bar on the homepage.
 * @param {searchfield} search value
 * @param {searChange} onChange function 
 */
const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='Enter a github user name'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;