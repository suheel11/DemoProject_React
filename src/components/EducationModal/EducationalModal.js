import React,{Component} from 'react';
import AsyncSelect from 'react-select/async';

class EduModal extends Component{
    state={
        isLoaded:false,
        clgs:[{nameOfSchool:"", degree:"", fieldOfStudy:"", startYear:"", endYear:"", grade:"", Dscrp:""}]
    }

    loadOptions=async(inputText, callback)=>{
        this.setState({isLoaded:true})
        const response = await fetch(`http://universities.hipolabs.com/search?name=${inputText}`);
        const json = await response.json();
        callback(json.map(i=>({label:i.name,value:i.web_pages})))
    }

    clgHandler=(clgs)=>{
        this.setState({
            clgs: clgs || []
        })
    }

    saveDetailsHandler=()=>{
        
    }
    
render(){
    // console.log(this.state.clgs);
    // if(!this.state.isLoaded){
    //     return <div> Loading...   </div>
    // }
    // else{
        return(
            <div>
                <h3>New Education</h3>
                <AsyncSelect 
                isMulti
                value={this.state.clgs}
                onChange={this.clgHandler}
                placeholder={'Enter your clg name'}
                loadOptions={this.loadOptions}
                />
                <div><br></br></div>
                <button onClick={this.saveDetailsHandler}>Save</button>
            </div>
        )
    }
    
//}
}

export default EduModal;