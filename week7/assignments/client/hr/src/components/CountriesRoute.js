import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Countries from '../context/Countries'
import AddCountries from './AddCountries';

function CountriesRoute(){
const [countries, setCountries] = useState([])

const getCountries = (() => {
  axios.get("http://localhost:3000/countries/get")
  .then(res => setCountries(res.data))
  .catch(err => console.log(err))
})

const addCountries = ((newCountry) => {
  axios.post("http://localhost:3000/countries/post", newCountry)
  .then(res => {
    setCountries(prevCountries => [...prevCountries, res.data])
  })
  .catch(err => console.log(err))
})

const deleteCountry = ((COUNTRY_ID) => {
  axios.delete(`https://localhost:3000/countries/delete/${COUNTRY_ID}`)
})

const editCountry = ((updates, COUNTRY_ID) => {
  axios.put(`http://localhost:3000/countries/edit/${COUNTRY_ID}`, updates)
    .then(res => {
      setCountries(prevCountries => prevCountries.map (countries => countries.COUNTRY_ID !== COUNTRY_ID ? countries : res.data))
    })
    .catch(err => console.log(err))
})

useEffect(() => {
    getCountries()
}, [])

return (
    <div>
      <h1 className="title">Countries DataBase</h1>
      <AddCountries submit={addCountries} btnText="Add" />
      <div>
        {
          countries.map(countries => {
            return <Countries 
              {...countries}
              key={countries.COUNTRY_ID}
              COUNTRY_ID={countries.COUNTRY_ID}
              COUNTRY_NAME={countries.COUNTRY_NAME}
              REGION_ID={countries.REGION_ID}
              editCountries={editCountry}
              deleteCountry={deleteCountry}
            />
          })
        }
      
      </div>
    </div>
  )
}

export default CountriesRoute;