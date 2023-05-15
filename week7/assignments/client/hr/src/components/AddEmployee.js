import React, { useState } from 'react';

function AddEmployees(props) {
    const initInputs = {
        EMPLOYEE_ID: props.EMPLOYEE_ID || "", 
        FIRST_NAME: props.FIRST_NAME || "", 
        LAST_NAME: props.LAST_NAME || "", 
        EMAIL: props.EMAIL || "",
        PHONE_NUMBER: props.PHONE_NUMBER || "",
        HIRE_DATE: props.HIRE_DATE || "",
        JOB_ID: props.JOB_ID || "", 
        SALARY: props.SALARY || "",
        COMMISSION_PCT: props.COMMISSION_PCT || "",
        MANAGER_ID: props.MANAGER_ID || "",
        DEPARTMENT_ID: props.DEPARTMENT_ID || "",
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
                    <h3>Employee Information</h3>
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
                        name="FIRST_NAME"
                        value={inputs.FIRST_NAME}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="form-text"
                    />
                    <input 
                        type="text"
                        name="LAST_NAME"
                        value={inputs.LAST_NAME}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="form-text"
                    />
                    <input 
                        type="text"
                        name="Email"
                        value={inputs.EMAIL}
                        onChange={handleChange}
                        placeholder="Email"
                        className="form-text"
                    />
                    <input 
                        type="text"
                        name="PHONE_NUMBER"
                        value={inputs.PHONE_NUMBER}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="form-text"
                    />
                    <input 
                        type="text"
                        name="HIRE_DATE"
                        value={inputs.HIRE_DATE}
                        onChange={handleChange}
                        placeholder="Hire Date"
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
                        name="SALARY"
                        value={inputs.SALARY}
                        onChange={handleChange}
                        placeholder="Salary"
                        className="form-text"
                    />
                    <input 
                        type="text"
                        name="COMMISSION_PCT"
                        value={inputs.COMMISSION_PCT}
                        onChange={handleChange}
                        placeholder="Commission Pct"
                        className="form-text"
                    />
                    <input 
                        type="text"
                        name="MANAGER_ID"
                        value={inputs.MANAGER_ID}
                        onChange={handleChange}
                        placeholder="Manager Id"
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
                    <button>ADD employee</button>
                </form>
            </div>
        </div>
    )
}

export default AddEmployees;