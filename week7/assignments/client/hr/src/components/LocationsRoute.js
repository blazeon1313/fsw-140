import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Locations from '../context/Locations'
import AddLocations from './AddLocations';

function LocationsRoute(){
const [locations, setLocations] = useState([])

const getLocations = (() => {
  axios.get("http://localhost:3000/locations/get")
  .then(res => setLocations(res.data))
  .catch(err => console.log(err))
})

const addLocations = ((newLocation) => {
  axios.post("http://localhost:3000/locations/post", newLocation)
  .then(res => {
    setLocations(prevLocations => [...prevLocations, res.data])
  })
  .catch(err => console.log(err))
})

const deleteLocation = ((LOCATION_ID) => {
  axios.delete(`https://localhost:3000/locations/delete/${LOCATION_ID}`)
})

const editLocations = ((updates, LOCATION_ID) => {
  axios.put(`http://localhost:3000/locations/edit/${LOCATION_ID}`, updates)
    .then(res => {
      setLocations(prevLocations => prevLocations.map (locations => locations.LOCATION_ID !== LOCATION_ID ? locations : res.data))
    })
    .catch(err => console.log(err))
})

useEffect(() => {
    getLocations()
}, [])

return (
    <div>
      <h1 className="title">Locations DataBase</h1>
      <AddLocations submit={addLocations} btnText="Add" />
      {
        locations.map(locations => {
          return <Locations 
            {...locations}
            key={locations.LOCATION_ID}
            LOCATION_ID={locations.LOCATION_ID}
            STREET_ADDRESS={locations.STREET_ADDRESS}
            POSTAL_CODE={locations.POSTAL_CODE}
            CITY={locations.CITY}
            STATE_PROVINCE={locations.STATE_PROVINCE}
            COUNTRY_ID={locations.COUNTRY_ID}
            editLocations={editLocations}
            deleteLocation={deleteLocation}
          />
        })
      }
    </div>
  )
}

export default LocationsRoute;