import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>{searchTerm}
    <div>
        <img src="search.svg" alt ="search"/>
        <input 
        type="text"
        placeholder='Search through thousands of movies...'
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}/>


    </div>
        <h1 className='text-white'>{searchTerm}</h1>


    </div>
  )
}

export default Search