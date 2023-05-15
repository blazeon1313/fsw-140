import React, { useState } from 'react';

function AddRegions(props) {
    const initInputs = { 
        REGION_ID: props.REGION_ID || "", 
        REGION_NAME: props.REGION_NAME || ""
    }

    const [inputs, setInputs] = useState(initInputs)

    const handleChange = ((e) => {
        const {name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    })

    const handleSubmit = ((e) => {
        props.submit(inputs, props.REGION_ID)
        setInputs(initInputs)
    })

    return (
        <div>
            <div className='form'>
                <form className="jobForm" onSubmit={handleSubmit}>
                    <h3>Regions Information</h3>    
                    <input 
                        type="text"
                        name="REGION_ID"
                        value={inputs.REGION_ID}
                        onChange={handleChange}
                        placeholder="Region Id"
                        className="form-text"
                    /> 
                    <input 
                        type="text"
                        name="REGION_NAME"
                        value={inputs.REGION_NAME}
                        onChange={handleChange}
                        placeholder="Region Name"
                        className="form-text"
                    />
                    <button>ADD</button>
                </form>
            </div>
        </div>
    )
}

export default AddRegions;