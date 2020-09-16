import React,{Component} from 'react';
import Aux from '../hoc/Aux';
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
                <h3>Hi There! Welcome to Education showcase</h3>
                <h5>Type your name and click enter</h5>
                <input type="text" value={this.state.name} onChange={this.copyHandler}/>
                <div><button onClick={this.setNameHandler}>Click Enter</button></div>
                </div>
            </Aux>
        )
    }
}

export default homeScreen;