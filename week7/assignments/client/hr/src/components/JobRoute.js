import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Jobs from '../context/Job'
import AddJobs from './AddJob';

function JobRoute(){
const [jobs, setJobs] = useState([])

const getJobs = (() => {
  axios.get("http://localhost:3000/jobs/get")
  .then(res => setJobs(res.data))
  .catch(err => console.log(err))
})

const addJobs = ((newJob) => {
  axios.post("http://localhost:3000/jobs/post", newJob)
  .then(res => {
    setJobs(prevJobs => [...prevJobs, res.data])
  })
  .catch(err => console.log(err))
})

const deleteJob = ((JOB_ID) => {
  axios.delete(`https://localhost:3000/jobs/delete/${JOB_ID}`)
})

const editJobs = ((updates, JOB_ID) => {
  axios.put(`http://localhost:3000/jobs/edit/${JOB_ID}`, updates)
    .then(res => {
      setJobs(prevJobs => prevJobs.map (jobs => jobs.JOB_ID !== JOB_ID ? jobs : res.data))
    })
    .catch(err => console.log(err))
})

useEffect(() => {
    getJobs()
}, [])

return (
    <div>
      <h1 className="title">Jobs DataBase</h1>
      <AddJobs submit={addJobs} btnText="Add Job" />
      {
        jobs.map(jobs => {
          return <Jobs 
            {...jobs}
            key={jobs.JOB_ID}
            JOB_ID={jobs.JOB_ID}
            JOB_TITLE={jobs.JOB_TITLE}
            MIN_SALARY={jobs.MIN_SALARY}
            MAX_SALARY={jobs.MAX_SALARY}
            editJobs={editJobs}
            deleteJob={deleteJob}
          />
        })
      }
    </div>
  )
}

export default JobRoute;