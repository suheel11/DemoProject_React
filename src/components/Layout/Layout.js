import React,{Component} from 'react';
import Homescreen from '../Homescreen/Homescreen';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import MainScreen from '../MainScreen/MainScreen';
import styled from 'styled-components';

class Layout extends Component{
    render(){
        const StyledDiv=styled.div`
        text-align:center
        `
        return(
            <StyledDiv>
            <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Homescreen}/>
                <Route path='/mainscreen/*' component={MainScreen}/>
            </Switch>
            </BrowserRouter>
            </StyledDiv>
        )
    }
}

export default Layout;