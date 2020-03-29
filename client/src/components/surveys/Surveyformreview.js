import React from 'react'
import _ from 'lodash';
import fields from './formFields'
import * as actions from '../../actions'

import {connect} from 'react-redux';
 const Surveyform=({onCancel,formValues,submitSurvey})=>{

const reviewFields= _.map(fields, ({name,label})=> {
  return(
      <div key={name}>
      <label>{label}</label>
      <div>
      {formValues[name]}</div></div>
  )  
})

    return(
       <div>
           {reviewFields}
        <button className="yellow darken-3 btn-flat " 
        onClick={onCancel}>back</button>
        <button  onClick={ actions.submitSurvey(formValues)} className="green btn-flat right white-text" >
            Send Survey<i className="material-icons right"></i>
            </button>
        </div>
    )
}
function fun(state){
return{ formValues:state.form.surveyform.values}
}
export default connect(fun,actions)(Surveyform)