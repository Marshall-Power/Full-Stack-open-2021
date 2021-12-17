import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countrylist from './components/Countrylist'
import Filter from './components/Filter'
import './App.css';

function App() {

  const [countries, setCountries] = useState([])
  const [newSearch, setNewSearch] = useState('')
  //const filteredCountries = countries.filter((country) => country.name.includes(newSearch))

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  console.log(countries);

  return (
    <div>
      find countries <Filter value={newSearch} changeHandler={handleSearchChange}/>
     <Countrylist countries={countries}/>
    </div>
  );
}

export default App;
