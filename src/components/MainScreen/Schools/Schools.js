import React,{Component} from 'react';
import School from './School/School';
import styled from 'styled-components';

class Schools extends Component{
    state={
        schAry:[]
    }
    componentDidMount(){
        this.setState({schAry:this.props.details})
    } 
    render(){
        const StyledDiv = styled.div`
        width: 300px;
        border: 1px solid black;
        padding: 50px;
        margin: 20px;
        background-color:grey;
        `
        //console.log(this.state.schAry);
        let schAry = this.state.schAry.map(s=>{
                return <School key={s.nameOfSchool.length} 
                detail={s} 
                clicked={()=>this.props.clicked(s.nameOfSchool)}/>
            }) 
    return(
            <StyledDiv>
            <div>{schAry}</div>
            </StyledDiv>
        )
    }
}

export default Schools;