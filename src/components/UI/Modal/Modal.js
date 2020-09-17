import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';
import styled from 'styled-components';

class Model extends Component{
    
    render(){
        const StyledDiv = styled.div`
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 70%;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    padding: 16px;
    left: 15%;
    top: 30%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    `
        return(
            <Aux>
                <Backdrop show={this.props.show} showFalseHandler={this.props.showFalseHandler}/>
            <StyledDiv style={{
                transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: this.props.show ? '1':'0'
            }}>
                {this.props.children}
            </StyledDiv>
            </Aux>
        )
    }
}

export default Model;