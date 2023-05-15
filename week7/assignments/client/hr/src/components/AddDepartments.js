import React, { useState } from 'react';

function AddDepartments(props) {
    const initInputs = { 
        DEPARTMENT_ID: props.DEPARTMENT_ID || "", 
        DEPARTMENT_NAME: props.DEPARTMENT_NAME || "", 
        MANAGER_ID: props.MANAGER_ID || "", 
        LOCATION_ID: props.LOCATION_ID || "" }

    const [inputs, setInputs] = useState(initInputs)

    const handleChange = ((e) => {
        const {name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    })

    const handleSubmit = ((e) => {
        props.submit(inputs, props.DEPARTMENT_ID)
        setInputs(initInputs)
    })

    return (
        <div>
            <div className='form'>
                <form className="jobForm" onSubmit={handleSubmit}>
                    <h3>Departments Information</h3>
                    <input 
                        type="text"
                        name="DEPARTMENT_ID"
                        value={inputs.DEPARTMENT_ID}
                        onChange={handleChange}
                        placeholder="Department Id"
                        className="form-text"
                    /> 
                    <input 
                        type="text"
                        name="DEPARTMENT_NAME"
                        value={inputs.DEPARTMENT_NAME}
                        onChange={handleChange}
                        placeholder="Department Name"
                        className="form-text"
                    />
                    <input 
                        type="text"
                        name="MANAGER_ID"
                        value={inputs.MANAGER_ID}
                        onChange={handleChange}
                        placeholder="Manager ID"
                        className="form-text"
                    />
                    <input 
                        type="text"
                        name="LOCATION_ID"
                        value={inputs.LOCATION_ID}
                        onChange={handleChange}
                        placeholder="Location Id"
                        className="form-text"
                    />
                    <button>ADD</button>
                </form>
            </div>
        </div>
    )
}

export default AddDepartments;