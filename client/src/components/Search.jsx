import React from 'react'
import countries from './countries'

function Search() {
  return (
    <form className='search-bar my-8 text-center'>
      <input type="text" name='search' className="search-box w-1/4 p-4" placeholder='Search News' />
      <button type='button' className='btn'>Search</button>
    </form>
  )
}

export default Search
