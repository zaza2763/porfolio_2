import React from 'react'
import './style.css'

const Search = (props) => {

console.log(props.error)

  const searhCity = () => {
    props.setSearch(props.searchCities)
    props.setSearchCities('')
  }
  return (
    
    <div className='Search'>
        <input  type="text" style={{border: props.error ? '1px solid red': 'none'}}  placeholder='Search for cities' value={props.searchCities} onChange={(e)=> props.setSearchCities(e.target.value)}/>
        <button type='submit' className='Btn-search' onClick={()=>searhCity()}>Search</button>
    </div>
  )
}

export default Search
