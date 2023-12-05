import React, { useEffect, useState } from 'react'
import './index.scss'

const CountriesCard = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  const [search, setSearch] = useState("")
  function handleSearch(e) {
    setSearch(e.target.value)

  }
  return (
    <div className="main">
      <div className="searchBar_bkg">
        <div className='searchBar'>
          <div className='inpBar'>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" onChange={handleSearch} placeholder='Search for a country...' />
         
          </div>
          <div className='selector'>
            <select>
              <option>Africa</option>
              <option>America</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>Oceania</option>
            </select>
          </div>
        </div>
      </div>
      <div className='countriesCard'>
        {countries.filter((item) => item.name.common.toLowerCase().includes(search.toLowerCase())).map((x) =>
          <ul className='card'>
            <li className='image'><img src={x.flags.png} /></li>
            <li className='name'>{x.name.common}</li>
            <li className='population'>Population: {x.population}</li>
            <li className='region'>Region: {x.region}</li>
            <li className='capital'>Capital: {x.capital}</li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default CountriesCard