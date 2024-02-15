import React from 'react'

/*
below script is used because we want after client press enter, the page won't reload 
    e.preventDefault()
*/

const SearchItem = ( { search, setSearch }) => {
  return (
    <form className='searchForm' onSubmit={ (e) => e.preventDefault() } >
        <label htmlFor='search'>Search</label>
        <input
            id='search'
            type='text'
            role='searchbox'
            placeholder='Search Items'
            value={search}
            onChange={ (e) => setSearch(e.target.value) }
        />
    </form>
  )
}

export default SearchItem