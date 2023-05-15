import React, { useState } from 'react';

function AddJobs(props) {
    const initInputs = { JOB_ID: props.JOB_ID || "", JOB_TITLE: props.JOB_TITLE || "", MIN_SALARY: props.MIN_SALARY || "", MAX_SALARY: props.MAX_SALARY || "" }

    const [inputs, setInputs] = useState(initInputs)

    const handleChange = ((e) => {
        const {name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    })

    const handleSubmit = ((e) => {
        props.submit(inputs, props.JOB_ID)
        setInputs(initInputs)
    })

    return (
        <div>
            <div className='form'>
                <form className="jobForm" onSubmit={handleSubmit}>
                    <h3>Workforce Information</h3>
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
                        name="JOB_TITLE"
                        value={inputs.JOB_TITLE}
                        onChange={handleChange}
                        placeholder="Job Title"
                        className="form-text"
                    />
                    <input 
                        type="text"
                        name="MIN_SALARY"
                        value={inputs.MIN_SALARY}
                        onChange={handleChange}
                        placeholder="Min Salary"
                        className="form-text"
                    />
                    <input 
                        type="text"
                        name="MAX_SALARY"
                        value={inputs.MAX_SALARY}
                        onChange={handleChange}
                        placeholder="Max Salary"
                        className="form-text"
                    />
                    <button>ADD job</button>
                </form>
            </div>
        </div>
    )
}

export default AddJobs;