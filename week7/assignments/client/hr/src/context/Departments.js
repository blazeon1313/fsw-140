import React, { useState } from 'react';
import AddDepartments from '../components/AddDepartments';

function Departments(props){
    const { DEPARTMENT_ID, DEPARTMENT_NAME, MANAGER_ID, LOCATION_ID } = props;
    const [editToggle, setEditToggle] = useState(false);

    return (
        <div>
            <div>
                { !editToggle ?
                    <>
                        <p>DEPARTMENT_ID: { DEPARTMENT_ID }</p>
                        <p>DEPARTMENT_NAME: { DEPARTMENT_NAME }</p>
                        <p>MANAGER_ID: { MANAGER_ID }</p>
                        <p>LOCATION_ID: { LOCATION_ID }</p>
                        <div>
                            <button onClick={() => props.deleteDepartment(DEPARTMENT_ID)}>Delete</button>
                            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                        </div>
                    </>
                    :
                    <>
                        <AddDepartments 
                            DEPARTMENT_ID={DEPARTMENT_ID}
                            DEPARTMENT_NAME={DEPARTMENT_NAME}
                            MANAGER_ID={MANAGER_ID}
                            LOCATION_ID={LOCATION_ID}
                        />
                        <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                    </>
                }
            </div>
        </div>
    )
}

export default Departments;