import React, { useState } from 'react';

function AddLocations(props) {
    const initInputs = { 
        LOCATION_ID: props.LOCATION_ID || "", 
        STREET_ADDRESS: props.STREET_ADDRESS || "", 
        POSTAL_CODE: props.POSTAL_CODE || "", 
        CITY: props.CITY || "" ,
        STATE_PROVINCE: props.STATE_PROVINCE || "" ,
        COUNTRY_ID: props.COUNTRY_ID || "" 
    }

    const [inputs, setInputs] = useState(initInputs)

    const handleChange = ((e) => {
        const {name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    })

    const handleSubmit = ((e) => {
        props.submit(inputs, props.LOCATION_ID)
        setInputs(initInputs)
    })

    return (
        <div>
            <div className='form'>
                <form className="jobForm" onSubmit={handleSubmit}>
                    <h3>Location Information</h3>
                    <input 
                        type="text"
                        name="LOCATION_ID"
                        value={inputs.LOCATION_ID}
                        onChange={handleChange}
                        placeholder="Location Id"
                        className="form-text"
                    /> 
                    <input 
                        type="text"
                        name="STREET_ADDRESS"
                        value={inputs.STREET_ADDRESS}
                        onChange={handleChange}
                        placeholder="Street Address"
                        className="form-text"
                    />
                    <input 
                        type="text"
                        name="POSTAL_CODE"
                        value={inputs.POSTAL_CODE}
                        onChange={handleChange}
                        placeholder="Postal Code"
                        className="form-text"
                    />
                    <input 
                        type="text"
                        name="CITY"
                        value={inputs.CITY}
                        onChange={handleChange}
                        placeholder="City"
                        className="form-text"
                    />
                    <input 
                        type="text"
                        name="STATE_PROVINCE"
                        value={inputs.STATE_PROVINCE}
                        onChange={handleChange}
                        placeholder="State Province"
                        className="form-text"
                    />
                    <input 
                        type="text"
                        name="COUNTRY_ID"
                        value={inputs.COUNTRY_ID}
                        onChange={handleChange}
                        placeholder="Country Id"
                        className="form-text"
                    />
                    <button>ADD</button>
                </form>
            </div>
        </div>
    )
}

export default AddLocations;