 import React ,{Component} from 'react'
 import axios from 'axios'
 import {connect} from 'react-redux';
import SurveyList from './surveylist'

import {Link}  from 'react-router-dom'
 const survey=function(){

return(<div>
  <SurveyList/>
    <div className="fixed-action-btn">
    

    <Link to= "/surveys/new" class="btn-floating btn-large waves-effect waves-light red">
        <i class="material-icons">add</i>
        </Link>
    </div>
</div>)}
 export default survey