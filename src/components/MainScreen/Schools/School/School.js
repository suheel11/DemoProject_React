import React from 'react';

const school = (props)=>{
    
    
    
    return(
        <div onClick={props.clicked}>
            {props.detail.nameOfSchool}
        </div>
    )
}

export default school;