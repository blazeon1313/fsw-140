import React, { useState } from 'react';
import AddCountries from '../components/AddCountries';

function Countries(props){
    const { COUNTRY_ID, COUNTRY_NAME, REGION_ID } = props;
    const [editToggle, setEditToggle] = useState(false);

    return (
        <div>
            <div>
                { !editToggle ?
                    <>
                        <p>COUNTRY_ID: { COUNTRY_ID }</p>
                        <p>COUNTRY_NAME: { COUNTRY_NAME }</p>
                        <p>REGION_ID: { REGION_ID }</p>
                        <div>
                            <button onClick={() => props.deleteJob(COUNTRY_ID)}>Delete</button>
                            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                        </div>
                    </>
                    :
                    <>
                        <AddCountries 
                            COUNTRY_ID={COUNTRY_ID}
                            COUNTRY_NAME={COUNTRY_NAME}
                            REGION_ID={REGION_ID}
                        />
                        <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                    </>
                }
            </div>
        </div>
    )
}

export default Countries;