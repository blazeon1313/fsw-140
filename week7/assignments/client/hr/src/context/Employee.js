import React, { useState } from 'react';
import AddEmployees from '../components/AddEmployee';

function Employee(props){
    const { EMPLOYEE_ID, FIRST_NAME, LAST_NAME, EMAIL, PHONE_NUMBER, HIRE_DATE, JOB_ID, SALARY, COMMISSION_PCT, MANAGER_ID, DEPARTMENT_ID } = props;
    const [editToggle, setEditToggle] = useState(false);

    return (
        <div>
            <div>
                { !editToggle ?
                    <>
                        <p>EMPLOYEE_ID: { EMPLOYEE_ID }</p>
                        <p>FIRST_NAME: { FIRST_NAME }</p>
                        <p>LAST_NAME: { LAST_NAME }</p>
                        <p>EMAIL: { EMAIL }</p>
                        <p>PHONE_NUMBER: { PHONE_NUMBER }</p>
                        <p>HIRE_DATE: { HIRE_DATE }</p>
                        <p>JOB_ID: { JOB_ID }</p>
                        <p>SALARY: { SALARY }</p>
                        <p>COMMISSION_PCT: { COMMISSION_PCT }</p>
                        <p>MANAGER_ID: { MANAGER_ID }</p>
                        <p>DEPARTMENT_ID: { DEPARTMENT_ID }</p>
                        <div>
                            <button onClick={() => props.deleteJob(EMPLOYEE_ID)}>Delete</button>
                            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                        </div>
                    </>
                    :
                    <>
                        <AddEmployees 
                            EMPLOYEE_ID={EMPLOYEE_ID}
                            FIRST_NAME={FIRST_NAME}
                            LAST_NAME={LAST_NAME}
                            EMAIL={EMAIL}
                            PHONE_NUMBER={PHONE_NUMBER}
                            HIRE_DATE={HIRE_DATE}
                            JOB_ID={JOB_ID}
                            SALARY={SALARY}
                            COMMISSION_PCT={COMMISSION_PCT}
                            MANAGER_ID={MANAGER_ID}
                            DEPARTMENT_ID={DEPARTMENT_ID}
                        />
                        <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                    </>
                }
            </div>
        </div>
    )
}

export default Employee;