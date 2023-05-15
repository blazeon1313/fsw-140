import React, { useState, useEffect } from 'react'
import axios from 'axios';
import JobHistory from '../context/JobHistory'
import AddJobHistory from './AddJobHistory';

function JobHistoryRoute(){
const [jobHistory, setJobHistory] = useState([])

const getJobHistory = (() => {
  axios.get("http://localhost:3000/history/get")
  .then(res => setJobHistory(res.data))
  .catch(err => console.log(err))
})

const addJobHistory = ((newJobHistory) => {
  axios.post("http://localhost:3000/history/post", newJobHistory)
  .then(res => {
    setJobHistory(prevJobHistory => [...prevJobHistory, res.data])
  })
  .catch(err => console.log(err))
})

const deleteJobHistory = ((EMPLOYEE_ID) => {
  axios.delete(`https://localhost:3000/history/delete/${EMPLOYEE_ID}`)
})

const editJobHistory = ((updates, EMPLOYEE_ID) => {
  axios.put(`http://localhost:3000/history/edit/${EMPLOYEE_ID}`, updates)
    .then(res => {
      setJobHistory(prevJobHistory => prevJobHistory.map (job_history => job_history.EMPLOYEE_ID !== EMPLOYEE_ID ? job_history : res.data))
    })
    .catch(err => console.log(err))
})

useEffect(() => {
    getJobHistory()
}, [])

return (
    <div>
      <h1 className="title">Job History DataBase</h1>
      <AddJobHistory submit={addJobHistory} btnText="Add Job History" />
      {
        jobHistory.map(job_history => {
          return <JobHistory 
            {...jobHistory}
            key={job_history.EMPLOYEE_ID}
            EMPLOYEE_ID={job_history.EMPLOYEE_ID}
            START_DATE={job_history.START_DATE}
            END_DATE={job_history.END_DATE}
            JOB_ID={job_history.JOB_ID}
            DEPARTMENT_ID={job_history.DEPARTMENT_ID}
            editJobs={editJobHistory}
            deleteJob={deleteJobHistory}
          />
        })
      }
    </div>
  )
}

export default JobHistoryRoute;