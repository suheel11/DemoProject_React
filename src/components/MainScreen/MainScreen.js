import React,{Component} from 'react';
import Aux from '../hoc/Aux';
import Schools from './Schools/Schools';
import SchholDetails from './SchoolDetails/SchoolDetails';

class mainScreen extends Component{
    state={
        name:"Suheel",
        details:[
            {nameOfSchool:"NEU", degree:"Grad", fieldOfStudy:"MIS", startYear:"2019", endYear:"2021", grade:"A", Dscrp:"something"},
            {nameOfSchool:"SMVIT", degree:"BE", fieldOfStudy:"CS", startYear:"2012", endYear:"2016", grade:"A", Dscrp:"something"}
        ]
    }

    detailHandler=(s)=>{
        const dAry = this.state.details.find(sd=>{
            return sd.nameOfSchool===s;
        }
        )
        console.log(dAry);
    }
    render(){
        return(
            <Aux>
                <Schools details={this.state.details} clicked={this.detailHandler}/>
                
            </Aux>
        )
    }
}

export default mainScreen;