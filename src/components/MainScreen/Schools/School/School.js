import React from 'react';

const school = (props)=>{
    
    
    
    return(
        <div onClick={props.clicked}>
            <ul>
                <li>
                    {props.detail.nameOfSchool}
                </li>
            </ul>
        </div>
    )
}

export default school;