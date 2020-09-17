import React,{Component} from 'react';
import Aux from '../hoc/Aux';
import Schools from './Schools/Schools';
import SchoolDetails from './SchoolDetails/SchoolDetails';
import styled from 'styled-components';
import EducationalModal from '../EducationModal/EducationalModal';
import Modal from '../UI/Modal/Modal';

class mainScreen extends Component{
    state={
        name:"Suheel",
        details:[
            {nameOfSchool:"Northeastern University", degree:"Graduate", fieldOfStudy:"MIS", startYear:"2019", endYear:"2021", grade:"A", Dscrp:"Courses: Web Design and User Experience, Application Engineering Development, Web Tools and Development"},
            {nameOfSchool:"SIR M. Visvesvaraya Institute of Technology", degree:"Undergraduate", fieldOfStudy:"CS", startYear:"2012", endYear:"2016", grade:"A", Dscrp:"Courses: Java, Data Structures, Analysis and Design of algorithms, Operating Systems"}
        ],
        tempObj:[],
        modalShow:false
    }

    detailHandler=(s)=>{
        const dAry = this.state.details.find(sd=>{
            return sd.nameOfSchool===s;
        }
        )
        var t = {...dAry}
        this.setState({tempObj:t});
    }

    showTrueHandler = () =>{
        this.setState({modalShow:true});
    }

    showFalseHandler = () =>{
        this.setState({modalShow:false});
    }
    render(){
        const StyledLeft=styled.div`
        float:left;
        width:25%
        `
        const StyledRight=styled.div`
        float:Right;
        width:75%
        `

        const em= <EducationalModal/>;
        return(
            
            <Aux>
                <Modal show={this.state.modalShow} showFalseHandler={this.showFalseHandler}>
                    {em}
                </Modal>
                <h2>Showcasing <span>{this.props.match.params[0]}</span> Profile </h2>
                <button onClick={this.showTrueHandler}>Add Education</button>
                <div></div>
                <StyledLeft><Schools details={this.state.details} clicked={this.detailHandler}/></StyledLeft>
                <StyledRight><SchoolDetails d={this.state.tempObj}/></StyledRight>
            </Aux>
        )
    }
}

export default mainScreen;