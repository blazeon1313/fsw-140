import React, { useState } from 'react';
import AddRegions from '../components/AddRegions';

function Regions(props){
    const { REGION_ID, REGION_NAME } = props;
    const [editToggle, setEditToggle] = useState(false);

    return (
        <div>
            <div>
                { !editToggle ?
                    <>
                        <p>REGION_ID: { REGION_ID }</p>
                        <p>REGION_NAME: { REGION_NAME }</p>
                        <div>
                            <button onClick={() => props.deleteRegion(REGION_ID)}>Delete</button>
                            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                        </div>
                    </>
                    :
                    <>
                        <AddRegions 
                            REGION_ID={REGION_ID}
                            REGION_NAME={REGION_NAME}
                        />
                        <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                    </>
                }
            </div>
        </div>
    )
}

export default Regions;