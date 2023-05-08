import React, { useState } from 'react';
import AddJobs from './AddJob';

function Jobs(props){
    const { JOB_ID, JOB_TITLE, MIN_SALARY, MAX_SALARY } = props;
    const [editToggle, setEditToggle] = useState(false);

    return (
        <div>
            <div>
                { !editToggle ?
                    <>
                        <p>JOB_ID: { JOB_ID }</p>
                        <p>JOB_TITLE: { JOB_TITLE }</p>
                        <p>MIN_SALARY: { MIN_SALARY }</p>
                        <p>MAX_SALARY: { MAX_SALARY }</p>
                        <div>
                            <button onClick={() => props.deleteJob(JOB_ID)}>Delete</button>
                            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                        </div>
                    </>
                    :
                    <>
                        <AddJobs 
                            JOB_ID={JOB_ID}
                            JOB_TITLE={JOB_TITLE}
                            MIN_SALARY={MIN_SALARY}
                            MAX_SALARY={MAX_SALARY}
                        />
                        <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                    </>
                }
            </div>
        </div>
    )
}

export default Jobs;