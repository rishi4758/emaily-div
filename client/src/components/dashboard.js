 import React ,{Component} from 'react'
 import axios from 'axios'

import {Link}  from 'react-router-dom'
export default function(){

return(<div>
    Dashboard
    <div className="fixed-action-btn">
    <Link to= "/surveys/new" class="btn-floating btn-large waves-effect waves-light red">
        <i class="material-icons">add</i>
        </Link>
    </div>
</div>)
 }