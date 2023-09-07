import React from 'react'

function Search({ setSearch }) {
    function handleSearch(e) {
        e.preventDefault()
        setSearch(e.target.value)
    }
    return (
        <div className='search-bar' onChange={handleSearch}>
            <label htmlFor="search">Search Items: </label>
            <input type="text" name="search" id="search" placeholder='Search Invintory' />
        </div>
    )
}

export default Search