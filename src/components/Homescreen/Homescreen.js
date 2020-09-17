import React,{Component} from 'react';
import Aux from '../hoc/Aux';
import { Link } from 'react-router-dom';
//import styled from 'styled-components';

class homeScreen extends Component{
    state = {
        name:""
    }

    setNameHandler=()=>{
        console.log(this.state.name);
    }

    copyHandler = (event) => {
        //console.log(event);
        this.setState({
          name:event.target.value
        })
      }

    render(){
        // const StyledDiv = styled.div`
        //     text-align: center;
        // `
        return(
            <Aux>
                <div>
                <h3>Hi There! Welcome to your education showcase</h3>
                <h5>Type your name and click "Enter" to begin!</h5>
                <input type="text" value={this.state.name} onChange={this.copyHandler} placeholder='Your Name'/>
                <div><br></br></div>
                <div><Link 
                to={'/mainscreen/'+this.state.name}
                ><button onClick={this.setNameHandler}>Enter</button></Link></div>
                </div>
            </Aux>
        )
    }
}

export default homeScreen;