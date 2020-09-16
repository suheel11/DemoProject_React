import React,{Component} from 'react';
import School from './School/School';

class Schools extends Component{
    state={
        schAry:[]
    }
    componentDidMount(){
        this.setState({schAry:this.props.details})
    } 
    render(){
        //console.log(this.state.schAry);
        let schAry = this.state.schAry.map(s=>{
                return <School key={s.nameOfSchool.length} 
                detail={s} 
                clicked={()=>this.props.clicked(s.nameOfSchool)}/>
            }) 
    return(
            <div>{schAry}</div>
        )
    }
}

export default Schools;