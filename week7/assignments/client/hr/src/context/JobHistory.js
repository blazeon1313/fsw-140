import React, { useState } from 'react';
import AddJobHistory from '../components/AddJobHistory';

function JobHistory(props){
    const { EMPLOYEE_ID, START_DATE, END_DATE, JOB_ID, DEPARTMENT_ID } = props;
    const [editToggle, setEditToggle] = useState(false);

    return (
        <div>
            <div>
                { !editToggle ?
                    <>
                        <p>EMPLOYEE_ID: { EMPLOYEE_ID }</p>
                        <p>START_DATE: { START_DATE }</p>
                        <p>END_DATE: { END_DATE }</p>
                        <p>JOB_ID: { JOB_ID }</p>
                        <p>DEPARTMENT_ID: { DEPARTMENT_ID }</p>
                        <div>
                            <button onClick={() => props.deleteJob(JOB_ID)}>Delete</button>
                            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                        </div>
                    </>
                    :
                    <>
                        <AddJobHistory 
                            EMPLOYEE_ID={EMPLOYEE_ID}
                            START_DATE={START_DATE}
                            END_DATE={END_DATE}
                            JOB_ID={JOB_ID}
                            DEPARTMENT_ID={DEPARTMENT_ID}
                        />
                        <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                    </>
                }
            </div>
        </div>
    )
}

export default JobHistory;