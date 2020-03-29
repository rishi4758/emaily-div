import React, {Component} from 'react';
import { render } from 'react-dom';
import Surveyform from './surveyform'
import Surveyformreview from './Surveyformreview'
import {reduxForm} from 'redux-form'
class Surveynew extends Component{
 state={review: false}
renderContent(){
    if(this.state.review){
        return <Surveyformreview 
        onCancel={()=>this.setState({review:false})}/>
    }
    else 
    {console.log("hye")
        return( <Surveyform   
        onSurveySubmit={ ( ) =>this.setState( {review:true} )} />)}
}
    render(){

        return(
            <div>{this.renderContent()}</div>
            
            )
    }
}

export default  reduxForm({form:'surveyform'})(Surveynew)