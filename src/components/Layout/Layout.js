import React,{Component} from 'react';
import Homescreen from '../Homescreen/Homescreen';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import MainScreen from '../MainScreen/MainScreen';
class Layout extends Component{
    render(){
        return(
            <BrowserRouter>
            <Switch>
                <Route path='/' excat component={Homescreen}/>
            </Switch>
            <MainScreen />
            </BrowserRouter>
        )
    }
}

export default Layout;