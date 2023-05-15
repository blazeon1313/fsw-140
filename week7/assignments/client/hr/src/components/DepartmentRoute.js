import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Departments from '../context/Departments';
import AddDepartments from './AddDepartments';

function DepartmentRoute(){
const [departments, setDepartments] = useState([])

const getDepartments = (() => {
  axios.get("http://localhost:3000/departments/get")
  .then(res => setDepartments(res.data))
  .catch(err => console.log(err))
})

const addDepartments = ((newDepartment) => {
  axios.post("http://localhost:3000/departments/post", newDepartment)
  .then(res => {
    setDepartments(prevDepartments => [...prevDepartments, res.data])
  })
  .catch(err => console.log(err))
})

const deleteDeparment = ((DEPARTMENT_ID) => {
  axios.delete(`https://localhost:3000/departments/delete/${DEPARTMENT_ID}`)
})

const editDepartment = ((updates, DEPARTMENT_ID) => {
  axios.put(`http://localhost:3000/departments/edit/${DEPARTMENT_ID}`, updates)
    .then(res => {
      setDepartments(prevDepartments => prevDepartments.map (departments => departments.DEPARTMENT_ID !== DEPARTMENT_ID ? departments : res.data))
    })
    .catch(err => console.log(err))
})

useEffect(() => {
    getDepartments()
}, [])

return (
    <div>
      <h1 className="title">Departments DataBase</h1>
      <AddDepartments submit={addDepartments} btnText="Add" />
      {
        departments.map(departments => {
          return <Departments 
            {...departments}
            key={departments.DEPARTMENT_ID}
            DEPARTMENT_ID={departments.DEPARTMENT_ID}
            DEPARTMENT_NAME={departments.DEPARTMENT_NAME}
            MANAGER_ID={departments.MANAGER_ID}
            LOCATION_ID={departments.LOCATION_ID}
            editDepartments={editDepartment}
            deleteDepartment={deleteDeparment}
          />
        })
      }
    </div>
  )
}

export default DepartmentRoute;