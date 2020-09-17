import React from 'react';
import styled from 'styled-components';

const schoolDetails = (props)=>{
    const StyledDiv = styled.div`
        width: 700px;
        border: 1px solid black;
        padding: 50px;
        margin: 20px;
        margin-left:125px;
        height: 700px;
        background-color:grey;
    `
    
    return(
        <StyledDiv>
        <div>
            <h2>Name Of School : {props.d.nameOfSchool}</h2>
            <h3>Degree: {props.d.degree}</h3>
            <div>Field Of Study: {props.d.fieldOfStudy}</div>
            <div>Start Year: {props.d.startYear}</div>
            <div>End Year: {props.d.endYear}</div>
            <div>Grade: {props.d.grade}</div>
            <div>Description: {props.d.Dscrp}</div>
        </div>
        </StyledDiv>
    )
}

export default schoolDetails;