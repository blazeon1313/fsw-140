import React, { useState } from 'react';

function AddCountries(props) {
    const initInputs = { 
        COUNTRY_ID: props.COUNTRY_ID || "", 
        COYNTRY_NAME: props.COYNTRY_NAME || "", 
        REGION_ID: props.REGION_ID || "", 
    }

    const [inputs, setInputs] = useState(initInputs)

    const handleChange = ((e) => {
        const {name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    })

    const handleSubmit = ((e) => {
        props.submit(inputs, props.COUNTRY_ID)
        setInputs(initInputs)
    })

    return (
        <div>
            <div className='form'>
                <form className="jobForm" onSubmit={handleSubmit}>
                    <h3>Countries Information</h3>
                    <input 
                        type="text"
                        name="COUNTRY_ID"
                        value={inputs.COUNTRY_ID}
                        onChange={handleChange}
                        placeholder="Country Id"
                        className="form-text"
                    /> 
                    <input 
                        type="text"
                        name="COUNTRY_NAME"
                        value={inputs.COYNTRY_NAME}
                        onChange={handleChange}
                        placeholder="Country Name"
                        className="form-text"
                    />
                    <input 
                        type="text"
                        name="REGION_ID"
                        value={inputs.REGION_ID}
                        onChange={handleChange}
                        placeholder="Region Id"
                        className="form-text"
                    />
                    <button>ADD</button>
                </form>
            </div>
        </div>
    )
}

export default AddCountries;