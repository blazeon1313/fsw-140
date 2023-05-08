import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Jobs from './components/Job'
import AddJobs from './components/AddJob';
import './App.css'

function App() {
  const [jobs, setJobs] = useState([])

  const getJobs = (() => {
    axios.get("http://localhost:3000/get")
    .then(res => setJobs(res.data))
    .catch(err => console.log(err))
  })

  const addJobs = ((newJob) => {
    axios.post("http://localhost:3000/post", newJob)
    .then(res => {
      setJobs(prevJobs => [...prevJobs, res.data])
    })
    .catch(err => console.log(err))
  })

  const deleteJob = ((JOB_ID) => {
    axios.delete(`https://localhost:3000/delete/${JOB_ID}`)
  })

  const editJobs = ((updates, JOB_ID) => {
    axios.put(`http://localhost:3000/edit/${JOB_ID}`, updates)
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
      <h1 className="header">Jobs DataBase</h1>
      <AddJobs submit={addJobs} btnText="Add Job" />
      {
        jobs.map(jobs => {
          return <Jobs 
            {...jobs}
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

export default App;
