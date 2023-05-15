import React, { useState } from 'react';

function AddJobHistory(props) {
    const initInputs = { 
        EMPLOYEE_ID: props.EMPLOYEE_ID || "", 
        START_DATE: props.START_DATE || "", 
        END_DATE: props.END_DATE || "", 
        JOB_ID: props.JOB_ID || "",
        DEPARTMENT_ID: props.DEPARTMENT_ID || "" 
    }

    const [inputs, setInputs] = useState(initInputs)

    const handleChange = ((e) => {
        const {name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    })

    const handleSubmit = ((e) => {
        props.submit(inputs, props.EMPLOYEE_ID)
        setInputs(initInputs)
    })

    return (
        <div>
            <div className='form'>
                <form className="jobForm" onSubmit={handleSubmit}>
                    <h3>Job History Information</h3>
                    <input 
                        type="text"
                        name="EMPLOYEE_ID"
                        value={inputs.EMPLOYEE_ID}
                        onChange={handleChange}
                        placeholder="Employee Id"
                        className="form-text"
                    /> 
                    <input 
                        type="text"
                        name="START_DATE"
                        value={inputs.START_DATE}
                        onChange={handleChange}
                        placeholder="Start Date"
                        className="form-text"
                    />
                    <input 
                        type="text"
                        name="END_DATE"
                        value={inputs.END_DATE}
                        onChange={handleChange}
                        placeholder="End Date"
                        className="form-text"
                    />
                    <input 
                        type="text"
                        name="JOB_ID"
                        value={inputs.JOB_ID}
                        onChange={handleChange}
                        placeholder="Job Id"
                        className="form-text"
                    />
                    <input 
                        type="text"
                        name="DEPARTMENT_ID"
                        value={inputs.DEPARTMENT_ID}
                        onChange={handleChange}
                        placeholder="Department Id"
                        className="form-text"
                    />
                    <button>ADD jobHistory</button>
                </form>
            </div>
        </div>
    )
}

export default AddJobHistory;