import React, { useState } from 'react';
import AddLocations from '../components/AddLocations';

function Locations(props){
    const { LOCATION_ID, STREET_ADDRESS, POSTAL_CODE, CITY, STATE_PROVINCE, COUNTRY_ID } = props;
    const [editToggle, setEditToggle] = useState(false);

    return (
        <div>
            <div>
                { !editToggle ?
                    <>
                        <p>LOCATION_ID: { LOCATION_ID }</p>
                        <p>STREET_ADDRESS: { STREET_ADDRESS }</p>
                        <p>POSTAL_CODE: { POSTAL_CODE }</p>
                        <p>CITY: { CITY }</p>
                        <p>STATE_PROVINCE: { STATE_PROVINCE }</p>
                        <p>COUNTRY_ID: { COUNTRY_ID }</p>
                        <div>
                            <button onClick={() => props.deleteLocation(LOCATION_ID)}>Delete</button>
                            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                        </div>
                    </>
                    :
                    <>
                        <AddLocations 
                            LOCATION_ID={LOCATION_ID}
                            STREET_ADDRESS={STREET_ADDRESS}
                            POSTAL_CODE={POSTAL_CODE}
                            CITY={CITY}
                            STATE_PROVINCE={STATE_PROVINCE}
                            COUNTRY_ID={COUNTRY_ID}
                        />
                        <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                    </>
                }
            </div>
        </div>
    )
}

export default Locations;