import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Employee from '../context/Employee';
import AddEmployees from './AddEmployee';

function EmployeeRoute(){
const [employees, setEmployees] = useState([])

const getEmployees = (() => {
  axios.get("http://localhost:3000/employees/get")
  .then(res => setEmployees(res.data))
  .catch(err => console.log(err))
})

const addEmployees = ((newEmployee) => {
  axios.post("http://localhost:3000/employees/post", newEmployee)
  .then(res => {
    setEmployees(prevEmployees => [...prevEmployees, res.data])
  })
  .catch(err => console.log(err))
})

const deleteEmployee = ((EMPLOYEE_ID) => {
  axios.delete(`https://localhost:3000/employees/delete/${EMPLOYEE_ID}`)
})

const editEmployee = ((updates, EMPLOYEE_ID) => {
  axios.put(`http://localhost:3000/employees/edit/${EMPLOYEE_ID}`, updates)
    .then(res => {
      setEmployees(prevEmployees => prevEmployees.map (employees => employees.EMPLOYEE_ID !== EMPLOYEE_ID ? employees : res.data))
    })
    .catch(err => console.log(err))
})

useEffect(() => {
    getEmployees()
}, [])

return (
    <div>
      <h1 className="title">Employees DataBase</h1>
      <AddEmployees submit={addEmployees} btnText="Add Employee" />
      {
        employees.map(employees => {
          return <Employee 
            {...employees}
            key={employees.EMPLOYEE_ID}
            EMPLOYEE_ID={employees.EMPLOYEE_ID}
            FIRST_NAME={employees.FIRST_NAME}
            LAST_NAME={employees.LAST_NAME}
            EMAIL={employees.EMAIL}
            PHONE_NUMBER={employees.PHONE_NUMBER}
            HIRE_DATE={employees.HIRE_DATE}
            JOB_ID={employees.JOB_ID}
            SALARY={employees.SALARY}
            COMMISSION_PCT={employees.COMMISSION_PCT}
            MANAGER_ID={employees.MANAGER_ID}
            DEPARTMENT_ID={employees.DEPARTMENT_ID}
            editJobs={editEmployee}
            deleteJob={deleteEmployee}
          />
        })
      }
    </div>
  )
}

export default EmployeeRoute;