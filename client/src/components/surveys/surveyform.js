import React, {Component} from 'react';
import { render } from 'react-dom';
import {reduxForm , Field} from 'redux-form';
import  SurveyField from "./surveyfield"
import _ from 'lodash'
import { Link } from 'react-router-dom';
import validEmails from '../../utils/validateEmail'
const   fields=[
    {label:"SurveyTitle", name:"title"},
    {label:"Subject Body", name:"body"},
    {label:"Email Body", name:"email"},
    {label:"Reciepient List", name:"list"}
]
 class Surveyform extends Component{
 
renderfields(){
    return _.map(fields,field=>{
        return <Field 
        label ={field.label} type="text" 
         name ={field.name} component={SurveyField} 
         />  
    })

}

    render(){

        return(

            <form onSubmit={this.props.handleSubmit (values =>{
                console.log(values)}) }>
            {this.renderfields()}
            <Link to ="/surveys" className="red left btn-flat">cancel</Link>
            <button type="submit" className=" teal right btn-flat">submit <i className="material-icons right white-text ">done</i></button>

            </form>
        )
    }
}

function validate(values){
const error={};
error.email=validEmails(values.email || '');
_.each(fields,({name})=>{
    if(!values[name])
    error[name]=" please enter the emails";
    
       })

       
    // if(!values.title){
    //     error.title="please enter the title";
    // }

   
  
    return error;
}

export default reduxForm({
    validate,
form:'surveyform'

})(Surveyform)