import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Regions from '../context/Regions'
import AddRegions from './AddRegions';

function RegionsRoute(){
const [regions, setRegions] = useState([])

const getRegions = (() => {
  axios.get("http://localhost:3000/regions/get")
  .then(res => setRegions(res.data))
  .catch(err => console.log(err))
})

const addRegions = ((newRegion) => {
  axios.post("http://localhost:3000/regions/post", newRegion)
  .then(res => {
    setRegions(prevRegions => [...prevRegions, res.data])
  })
  .catch(err => console.log(err))
})

const deleteRegion = ((REGION_ID) => {
  axios.delete(`https://localhost:3000/regions/delete/${REGION_ID}`)
})

const editRegions = ((updates, REGION_ID) => {
  axios.put(`http://localhost:3000/regions/edit/${REGION_ID}`, updates)
    .then(res => {
      setRegions(prevRegions => prevRegions.map (regions => regions.REGION_ID !== REGION_ID ? regions : res.data))
    })
    .catch(err => console.log(err))
})

useEffect(() => {
    getRegions()
}, [])

return (
    <div>
      <h1 className="title">Regions DataBase</h1>
      <AddRegions submit={addRegions} btnText="Add" />
      {
        regions.map(regions => {
          return <Regions 
            {...regions}
            key={regions.REGION_ID}
            REGION_ID={regions.REGION_ID}
            REGION_NAME={regions.REGION_NAME}
            editJobs={editRegions}
            deleteJob={deleteRegion}
          />
        })
      }
    </div>
  )
}

export default RegionsRoute;