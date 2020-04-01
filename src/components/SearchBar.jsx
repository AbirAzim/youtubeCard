import React, { Fragment } from 'react';

const SearchBar = () => {
  return (
    <Fragment>
      <form className='form-inline'>
        <input
          className='form-control'
          type='search'
          placeholder='Search'
          aria-label='Search'
        ></input>
        <button className='btn btn-outline-success ml-2' type='submit'>
          Search
        </button>
      </form>
    </Fragment>
  );
};

export default SearchBar;
