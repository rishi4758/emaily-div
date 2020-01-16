import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import Payments from './payments'
 class Header extends React.Component{
rendercontent(){
  switch(this.props.auth){
    case false:
return <li><a href="auth/google">Login with google</a></li>
case null:
return "stille deciding"
default:
  return <Fragment> 
    <li><Payments/></li>
     <li style={{marginLeft:'10px', marginRight:'5px'}}><a>Credits: {this.props.auth.credits}</a></li>
     <li><a href="api/logout">Logout</a></li>
  
  </Fragment> 


  }
}
render(){
   
    return (
<nav>
    <div className="nav-wrapper">
      <Link to={this.props.auth ? 'surveys' : '/'}
       className="brand-logo">
         Logo</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {this.rendercontent()}
        
      </ul>
    </div>
  </nav>
    )
    }
}
function mapStateToProps({auth}){
  return {auth}
}
 export default connect(mapStateToProps)(Header)